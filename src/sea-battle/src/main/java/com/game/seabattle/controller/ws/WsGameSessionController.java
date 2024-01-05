package com.game.seabattle.controller.ws;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import com.game.seabattle.httpbody.request.ws.WsGameMoveRequestBody;
import com.game.seabattle.httpbody.request.ws.WsRegisterShipsRequestBody;

@Controller
public class WsGameSessionController {
	
	@PostMapping("/ships")
	public ResponseEntity<?> registerShipsLocations(WsRegisterShipsRequestBody request) {
		return null;
	}
	
	@PostMapping("/move")
	public ResponseEntity<?> makeMove(WsGameMoveRequestBody request) {
		return null;
	}
}
