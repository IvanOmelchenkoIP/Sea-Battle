package com.game.seabattle.controller.routing;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.game.seabattle.httpbody.request.GameIdRequestBody;
import com.game.seabattle.httpbody.response.HttpResponseBody;
import com.game.seabattle.model.player.BotPlayer;
import com.game.seabattle.model.player.Player;
import com.game.seabattle.service.game.GameService;

@RequestMapping("/game")
@RestController
public class GameController {

	@Autowired
	private GameService gameService;

	@GetMapping
	public ModelAndView showGameBoard() {
		return new ModelAndView("board.html");
	}

	@PostMapping("/init/singleplayer")
	public ResponseEntity<?> initSingleplayerGame() {
		Player player = new Player(UUID.randomUUID().toString());
		Player bot = new BotPlayer(UUID.randomUUID().toString());
		String gameId = gameService.newGame(player, bot);
		String body = "{\"gameId\":\"" + gameId + "\", \"player1\":\"" + player.getId() + "\", \"player2\":\""
				+ bot.getId() + "\"}";
		return ResponseEntity.ok(new HttpResponseBody(body));
	}

	@PostMapping("/init/multiplayer/local")
	public ResponseEntity<?> initLocalMultiplayerlayerGame() {
		Player player1 = new Player(UUID.randomUUID().toString());
		Player player2 = new Player(UUID.randomUUID().toString());
		String gameId = gameService.newGame(player1, player2);
		String body = "{\"gameId\":\"" + gameId + "\", \"player1\":\"" + player1.getId() + "\", \"player2\":\""
				+ player2.getId() + "\"}";
		return ResponseEntity.ok(new HttpResponseBody(body));
	}

	@PostMapping("/init/multiplayer/online")
	public ResponseEntity<?> initOnlineMupltiplayerGame() {
		Player player = new Player(UUID.randomUUID().toString());
		String gameId = gameService.newGame(player);
		String body = "{\"gameId\":\"" + gameId + "\", \"player1\":\"" + player.getId() + "\"}";
		return ResponseEntity.ok(new HttpResponseBody(body));
	}

	@PostMapping(path = "/join", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<?> joinGame(@RequestBody GameIdRequestBody request) {
		String gameId = request.getGameId();
		Player player = new Player(UUID.randomUUID().toString());
		try {
			gameService.connectPlayer(gameId, player);
		} catch (Exception exception) {
			System.out.print(exception);
			return new ResponseEntity<HttpResponseBody>(new HttpResponseBody(exception.getMessage()),
					HttpStatus.BAD_REQUEST);
		}
		String body = "{\"gameId\":\"" + gameId + "\", \"player2\":\"" + player.getId() + "\"}";
		return ResponseEntity.ok(new HttpResponseBody(body));
	}

	@DeleteMapping(path = "/destroy", produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE )
	public ResponseEntity<?> deleteGame(@RequestBody GameIdRequestBody request) {
		gameService.destroyGame(request.getGameId());
		String body = "Game session cancelled!";
		return ResponseEntity.ok(new HttpResponseBody(body));
	}
}
