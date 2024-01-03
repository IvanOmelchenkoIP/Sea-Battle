package com.game.seabattle.controller.ws;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/game/session")
@RestController
public class GameSessionController {

	@PostMapping("/init/singleplayer")
	public ResponseEntity<?> initSingleplayerGame() {
		return null;
	}
	
	@PostMapping("/init/multiplayer/local")
	public ResponseEntity<?> initLocalMultiplayerlayerGame() {
		return null;
	}
	
	@PostMapping("/init/multiplayer/online")
	public ResponseEntity<?> initOnlineMupltiplayerGame() {
		return null;
	}
	
	@PostMapping("/connect")
	public ResponseEntity<?> connectUser() {
		return null;
	}
	
	@PostMapping("/ships")
	public ResponseEntity<?> registerShipsLocations() {
		return null;
	}
	
	@PostMapping("/move")
	public ResponseEntity<?> makeMove() {
		return null;
	}
}
