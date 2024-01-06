package com.game.seabattle.service.game;

import java.awt.Point;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.game.seabattle.exception.GameFullException;
import com.game.seabattle.exception.GameInvalidException;
import com.game.seabattle.model.game.Game;
import com.game.seabattle.model.gameplay.board.Board;
import com.game.seabattle.model.gameplay.ship.Ship;
import com.game.seabattle.model.gameplay.ship.ShipsCollection;
import com.game.seabattle.model.player.Player;

@Service
public class GameService {

	@Autowired
	private GamesInMemoryDBService db;
	@Autowired
	private ShipsService shipsService;
	@Autowired
	private BoardService boardService;

	public String newGame(Player player) {
		Game game = new Game();
		game.setPlayer1Board(new Board());
		game.setPlayer1Ships(new ShipsCollection());
		game.setPlayer1(player);
		String id = db.addGame(game);
		return id;
	}

	public String newGame(Player player1, Player player2) {
		Game game = new Game();
		game.setPlayer1Board(new Board());
		game.setPlayer1Ships(new ShipsCollection());
		game.setPlayer1(player1);
		game.setPlayer2Board(new Board());
		game.setPlayer2Ships(new ShipsCollection());
		game.setPlayer2(player2);
		String id = db.addGame(game);
		return id;
	}

	public void connectPlayer(String id, Player player) throws GameInvalidException, GameFullException {
		Game game = db.findGame(id);
		if (game == null) {
			throw new GameInvalidException("Game with id " + id + " does not exist!");
		}
		if (game.getPlayer2() != null) {
			throw new GameFullException("Another player has already joined the game!");
		}
		game.setPlayer2Board(new Board());
		game.setPlayer2Ships(new ShipsCollection());
		game.setPlayer2(player);
	}

	public void setShips(String gameId, String playerId, ShipsCollection ships) throws GameInvalidException {
		Game game = db.findGame(gameId);
		if (game == null) {
			throw new GameInvalidException("Game with id " + gameId + " does not exist!");
		}
		if (game.getPlayer1().getId() == playerId) {
			game.copyPlayer1Ships(ships);
		} else {
			game.copyPlayer2Ships(ships);
		}
	}

	public Game getGame(String id) {
		return db.findGame(id);
	}

	public void destroyGame(String id) {
		db.removeGame(id);
	}

	private Board processPlayerMove(Point coords, Board board, ShipsCollection shipsCollection) {
		boolean isHit = false;
		Ship destroyedShip = null;
		Ship[] ships = shipsCollection.getShips();
		System.out.println(ships);
		for (Ship ship : ships) {
			isHit = shipsService.checkAndUpdateHitShip(ship, coords);
			if (isHit) {
				if (ship.isDestroyed()) {
					destroyedShip = ship;
				}
				break;
			}
		}
		return boardService.updateBoard(board, coords, isHit, destroyedShip);
	}
	
	public Board makeMove(String gameId, String playerId, int x, int y) throws GameInvalidException {
		Game game = db.findGame(gameId);
		if (game == null) {
			throw new GameInvalidException("Game with id " + gameId + " does not exist!");
		}
		Point coords = new Point(x, y);
		if (game.getPlayer1().getId() == playerId) {
			return processPlayerMove(coords, game.getPlayer2Board(), game.getPlayer2Ships());
		} else {
			return processPlayerMove(coords, game.getPlayer1Board(), game.getPlayer1Ships());
		}
	}
	
	public boolean checkVictory(String gameId, String playerId) throws GameInvalidException {
		Game game = db.findGame(gameId);
		if (game == null) {
			throw new GameInvalidException("Game with id " + gameId + " does not exist!");
		}
		ShipsCollection shipsCollection;
		if (game.getPlayer1().getId() == playerId) {
			shipsCollection = game.getPlayer2Ships();
		} else {
			shipsCollection = game.getPlayer2Ships();
		}
		Ship[] ships = shipsCollection.getShips();
		for (Ship ship : ships) {
			if (!ship.isDestroyed()) return false;
		}
		return true;
	}	
}
