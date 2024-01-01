package com.game.seabattle.service.gameplay;

import java.awt.Point;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.game.seabattle.model.gameplay.ship.Ship;

@Service
public class ShipsCollectionService {

	@Autowired
	ShipService shipService;
	
	public void addShips() {
		
	}
	
	public void updateShipsStates() {
		
	}
	
	public void checkCellsHit(Ship ship, Point coords) {
		
	}
	
	/*public Ship findHitShip(ShipsCollection shipsCollection, Point coords) {
		ArrayList<Ship> ships = shipsCollection.getShips();
		for (Ship ship : ships) {
			if (ship.isDestroyed()) {
				continue;
			}
			boolean isHit = shipService.checkAndUpdateHitShip(ship, coords);
			if (isHit) {
				return ship;
			}
		}
		return null;
	}*/
	
	
}
