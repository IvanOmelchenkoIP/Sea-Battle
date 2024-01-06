package com.game.seabattle.httpbody.request.ws;

public class WsRegisterShipsRequestBody {

	private String playerId;
	private String gameId;
	private String ships;
	
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
	
	public String getShips() {
		return ships;
	}
	
	public void setShips(String ships) {
		this.ships = ships;
	}	
}
