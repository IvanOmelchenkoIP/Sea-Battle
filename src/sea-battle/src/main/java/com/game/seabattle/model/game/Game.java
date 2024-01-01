package com.game.seabattle.model.game;

import java.util.ArrayList;

import com.game.seabattle.model.gameplay.board.Board;
import com.game.seabattle.model.gameplay.ship.Ship;
import com.game.seabattle.model.player.Player;

public class Game {
	
	private Player player1;
	private Player player2;
	private Board player1Board;
	private Board player2Board;
	private ArrayList<Ship> player1Ships;
	private ArrayList<Ship> player2Ships;
	
	
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
	
	public void setPlayer1Ships(ArrayList<Ship> ships) {
		player1Ships = ships;
	}
	
	public ArrayList<Ship> getPlayer1Ships() {
		return player1Ships;
	}
	
	public void setPlayer2Ships(ArrayList<Ship> ships) {
		player2Ships = ships;
	}
	
	public ArrayList<Ship> getPlayer2Ships() {
		return player2Ships;
	}
}
