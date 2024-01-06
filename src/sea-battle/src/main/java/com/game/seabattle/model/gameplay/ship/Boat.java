package com.game.seabattle.model.gameplay.ship;

import com.game.seabattle.model.gameplay.ship.Ship.SHIP_TYPES;
import com.game.seabattle.model.gameplay.ship.cell.ShipCell;

public class Boat extends Ship {

	public Boat() {
		super(SHIP_TYPES.BOAT);
	}
	
	public Boat(Ship shipToCopy) {
		super(SHIP_TYPES.BOAT);
		ShipCell[] cellsToCopy = shipToCopy.getCells();
		for (int i = 0; i < SHIP_TYPES.BOAT; i++) {
			cells[i] = cellsToCopy[i];
		}
	}
	
	public void copy(Ship shipToCopy) {
		ShipCell[] cellsToCopy = shipToCopy.getCells();
		for (int i = 0; i < SHIP_TYPES.BOAT; i++) {
			cells[i] = cellsToCopy[i];
		}
	}
}
