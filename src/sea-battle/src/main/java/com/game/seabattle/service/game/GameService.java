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
import com.game.seabattle.model.player.Player;
import com.game.seabattle.service.gameplay.ShipsCollectionService;

@Service
public class GameService {

	@Autowired
	private GamesInMemoryDBService db;
	@Autowired
	private ShipsCollectionService shipsService;
	@Autowired 
	private BoardService boardService;

	public String newGame(Player player) {
		Game game = new Game();
		game.setPlayer1Board(new Board());
		game.setPlayer1(player);
		String id = db.addGame(game);
		return id;
	}
	
	public String newGame(Player player1, Player player2) {
		Game game = new Game();
		game.setPlayer1Board(new Board());
		game.setPlayer1(player1);
		game.setPlayer2Board(new Board());
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
		game.setPlayer2(player);
	}

	public void setShips(String id, ArrayList<Ship> player1Ships, ArrayList<Ship> player2Ships) {
		Game game = db.findGame(id);
		game.setPlayer1Ships(player1Ships);
		game.setPlayer2Ships(player2Ships);
	}

	public Game getGame(String id) {
		return db.findGame(id);
	}
	
	public void destroyGame(String id) {
		db.removeGame(id);
	}
	
	/*public void makeMove(Point coords, Board board, ShipsCollection ships) {
		Ship ship = shipsService.findHitShip(ships, coords);
		if (ship != null) {
			if (ship.isDestroyed()) {
				ArrayList<Point> coordsList = shipsService.getAllCoords();
				boardService.updateDestroyed(boardk coordsList);
			} else {
				boardService.updateHit(coords);
			}
		} else {
			boardService.updateMissed(coords);
		}
	}*/
	
	public void makePlayer1Move(String id, Point coords) {
		Game game = db.findGame(id);
		//makeMove(coords, game.getPlayer1Board(), game.getPlayer1Ships());
	}
	
	public void makePlayer2Move(String id, Point coords) {
		Game game = db.findGame(id);
		//makeMove(coords, game.getPlayer2Board(), game.getPlayer2Ships());
	}
}
