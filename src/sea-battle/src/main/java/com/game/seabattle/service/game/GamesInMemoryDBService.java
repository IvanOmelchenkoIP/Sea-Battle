package com.game.seabattle.service.game;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.game.seabattle.model.db.GameInMemoryDB;
import com.game.seabattle.model.game.Game;

@Service
public class GamesInMemoryDBService {

	@Autowired
	private GameInMemoryDB storage;
	
	public Game findGame(String id) {
		return storage.getGame(id);
	}
	
	public String addGame(Game game) {
		String id = UUID.randomUUID().toString();
		storage.addGame(id, game);
		return id;
	}
	
	public void removeGame(String id) {
		storage.removeGame(id);
	}
}
