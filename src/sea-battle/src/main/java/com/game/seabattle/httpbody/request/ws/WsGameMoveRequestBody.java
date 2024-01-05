package com.game.seabattle.httpbody.request.ws;

public class WsGameMoveRequestBody {
	
	private String playerId;
	private String gameId;
	private String coords;
	
	public WsGameMoveRequestBody(String playerId, String gameId, String coords) {
		this.playerId = playerId;
		this.gameId = gameId;
		this.coords = coords;
	}

	public String getPlayerId() {
		return playerId;
	}

	public void setPlayerId(String playerId) {
		this.playerId = playerId;
	}

	public String getGameId() {
		return gameId;
	}

	public void setGameId(String gameId) {
		this.gameId = gameId;
	}

	public String getCoords() {
		return coords;
	}

	public void setCoords(String coords) {
		this.coords = coords;
	}	

}
