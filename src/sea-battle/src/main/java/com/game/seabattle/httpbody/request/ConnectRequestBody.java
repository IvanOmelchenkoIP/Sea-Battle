package com.game.seabattle.httpbody.request;

public class ConnectRequestBody {

	private String gameId;
	
	public ConnectRequestBody(String gameId) {
		this.gameId = gameId;
	}
	
	public void setGameId(String gameId) {
		this.gameId = gameId;
	}
	
	public String getGameId() {
		return gameId;
	}
}
