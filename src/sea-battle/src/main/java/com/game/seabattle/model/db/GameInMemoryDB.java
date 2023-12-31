package com.game.seabattle.model.db;

import java.util.HashMap;

import org.springframework.stereotype.Component;

import com.game.seabattle.model.game.Game;

@Component
public class GameInMemoryDB {

	private static GameInMemoryDB instance;
	private HashMap<String, Game> storage;
	
	private GameInMemoryDB() {
		storage = new HashMap<String, Game>();
	}
	
	public GameInMemoryDB getInstance() {
		if (instance == null) {
			instance = new GameInMemoryDB();
		}
		return instance;
	}
	
	public Game getGame(String id) {
		return storage.get(id);
	}
	
	public void addGame(String id, Game game) {
		storage.put(id, game);
	}
	
	public void removeGame(String id) {
		storage.remove(id);
	}
}
