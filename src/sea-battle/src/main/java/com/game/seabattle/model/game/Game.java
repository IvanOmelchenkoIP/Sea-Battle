package com.game.seabattle.model.game;

import com.game.seabattle.model.gameplay.board.Board;
import com.game.seabattle.model.gameplay.ship.ShipsCollection;
import com.game.seabattle.model.player.Player;

public class Game {
	
	private Player player1;
	private Player player2;
	private Board player1Board;
	private Board player2Board;
	private ShipsCollection player1Ships;
	private ShipsCollection player2Ships;
	
	public void setPlayer1(Player player) {
		player1 = player;
	}
	
	public Player getPlayer1() {
		return player1;
	}
	
	public void setPlayer2(Player player) {
		player2 = player;
	}
	
	public Player getPlayer2() {
		return player2;
	}
	
	public void setPlayer1Board(Board board) {
		player1Board = board;
	}
	
	public Board getPlayer1Board() {
		return player1Board;
	}
	
	public void setPlayer2Board(Board board) {
		player2Board = board;
	}
	
	public Board getPlayer2Board() {
		return player2Board;
	}
	
	public void setPlayer1Ships(ShipsCollection ships) {
		player1Ships = ships;
	}
	
	public ShipsCollection getPlayer1Ships() {
		return player1Ships;
	}
	
	public void copyPlayer1Ships(ShipsCollection ships) {
		player1Ships.copy(ships);
	}
	
	public void setPlayer2Ships(ShipsCollection ships) {
		player2Ships = ships;
	}
	
	public ShipsCollection getPlayer2Ships() {
		return player2Ships;
	}
	
	public void copyPlayer2Ships(ShipsCollection ships) {
		player2Ships.copy(ships);
	}
}
