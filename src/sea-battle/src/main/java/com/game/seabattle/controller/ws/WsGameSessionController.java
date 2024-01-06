package com.game.seabattle.controller.ws;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.game.seabattle.httpbody.request.GameIdRequestBody;
import com.game.seabattle.httpbody.request.ws.WsGameMoveRequestBody;
import com.game.seabattle.httpbody.request.ws.WsRegisterShipsRequestBody;
import com.game.seabattle.httpbody.response.HttpResponseBody;

@Controller
@RequestMapping("/ws")
public class WsGameSessionController {
	
	@Autowired
	private SimpMessagingTemplate smt;
	
	@PostMapping(path = "/joined", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> playerHasJoined(@RequestBody GameIdRequestBody request) {
		String body = "{ \"response_type\":\"player_connected\" }";
		HttpResponseBody response = new HttpResponseBody(body);
		smt.convertAndSend("/topic/session/" + request.getGameId(), response);
		return ResponseEntity.ok(response);
	}
	
	@PostMapping("/ships")
	public ResponseEntity<?> registerShipsLocations(WsRegisterShipsRequestBody request) {
		return null;
	}
	
	@PostMapping("/move")
	public ResponseEntity<?> makeMove(WsGameMoveRequestBody request) {
		return null;
	}
}
