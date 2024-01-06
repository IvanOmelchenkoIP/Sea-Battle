package com.game.seabattle.controller.ws;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.game.seabattle.exception.GameInvalidException;
import com.game.seabattle.httpbody.request.GameIdRequestBody;
import com.game.seabattle.httpbody.request.ws.WsGameMoveRequestBody;
import com.game.seabattle.httpbody.request.ws.WsRegisterShipsRequestBody;
import com.game.seabattle.httpbody.response.HttpResponseBody;
import com.game.seabattle.model.gameplay.board.Board;
import com.game.seabattle.model.gameplay.ship.ShipsCollection;
import com.game.seabattle.service.game.BoardService;
import com.game.seabattle.service.game.GameService;
import com.game.seabattle.service.game.ShipsService;

@Controller
@RequestMapping("/ws")
public class WsGameSessionController {

	@Autowired
	private SimpMessagingTemplate smt;

	@Autowired
	ShipsService shipService;

	@Autowired
	GameService gameService;

	@Autowired
	BoardService boardService;

	@PostMapping(path = "/joined", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> playerHasJoined(@RequestBody GameIdRequestBody request) {
		String body = "{ \"response_type\":\"player_connected\" }";
		HttpResponseBody response = new HttpResponseBody(body);
		smt.convertAndSend("/topic/session/" + request.getGameId(), response);
		return ResponseEntity.ok(response);
	}

	@PostMapping(path = "/ships", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> registerShipsLocations(@RequestBody WsRegisterShipsRequestBody request) {
		String playerId = request.getPlayerId();
		ShipsCollection ships = shipService.parseShips(request.getShips());
		try {
			gameService.setShips(request.getGameId(), playerId, ships);
		} catch (GameInvalidException e) {
			HttpResponseBody errorResponse = new HttpResponseBody(e.getMessage());
			smt.convertAndSend("/topic/session/" + request.getGameId(), errorResponse);
			return new ResponseEntity<HttpResponseBody>(errorResponse, HttpStatus.BAD_REQUEST);
		}
		String body = "{ \"response_type\":\"ships_placed\", \"playerId\":\"" + playerId + "\" }";
		HttpResponseBody response = new HttpResponseBody(body);
		smt.convertAndSend("/topic/session/" + request.getGameId(), response);
		return ResponseEntity.ok(response);
	}

	@PostMapping(path = "/move", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> makeMove(@RequestBody WsGameMoveRequestBody request) {
		Board board;
		boolean isVictory;
		try {
			String gameId = request.getGameId();
			String playerId = request.getPlayerId();
			int x = Integer.parseInt(request.getCoordX());
			int y = Integer.parseInt(request.getCoordY());
			board = gameService.makeMove(gameId, playerId, x, y);
			isVictory = gameService.checkVictory(gameId, playerId);

		} catch (GameInvalidException e) {
			HttpResponseBody errorResponse = new HttpResponseBody(e.getMessage());
			smt.convertAndSend("/topic/session/" + request.getGameId(), errorResponse);
			return new ResponseEntity<HttpResponseBody>(errorResponse, HttpStatus.BAD_REQUEST);
		}
		String boardString = board.toString();
		String body = "{ \"response_type\":\"move_made\", \"playerId\":\"" + request.getPlayerId() + "\", \"board\":\""
				+ boardString + "\", \"isVictory\":\"" + isVictory + "\" }";
		HttpResponseBody response = new HttpResponseBody(body);
		smt.convertAndSend("/topic/session/" + request.getGameId(), response);
		return ResponseEntity.ok(body);
	}
}
