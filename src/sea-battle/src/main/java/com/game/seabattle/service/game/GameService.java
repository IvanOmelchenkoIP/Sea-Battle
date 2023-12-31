package com.game.seabattle.service.game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.game.seabattle.model.game.Game;
import com.game.seabattle.model.gameplay.board.Board;
import com.game.seabattle.model.gameplay.ship.ShipsCollection;
import com.game.seabattle.model.player.Player;

@Service
public class GameService {

	@Autowired
	private GamesInMemoryDBService db;

	public void newGame(Player player) {
		Game game = new Game();
		game.setPlayer1Board(new Board());
		game.setPlayer1(player);
		db.addGame(game);
	}

	public void connectPlayer(String id, Player player) {
		Game game = db.findGame(id);
		game.setPlayer2Board(new Board());
		game.setPlayer2(player);
	}

	public void setShips(String id, ShipsCollection player1Ships, ShipsCollection player2Ships) {
		Game game = db.findGame(id);
		game.setPlayer1Ships(player1Ships);
		game.setPlayer2Ships(player2Ships);
	}

	public Game getGame(String id) {
		return db.findGame(id);
	}
}
