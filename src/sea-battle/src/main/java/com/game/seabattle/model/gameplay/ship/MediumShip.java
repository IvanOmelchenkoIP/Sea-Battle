package com.game.seabattle.model.gameplay.ship;

import com.game.seabattle.model.gameplay.ship.Ship.SHIP_TYPES;
import com.game.seabattle.model.gameplay.ship.cell.ShipCell;

public class MediumShip extends Ship {

	public MediumShip() {
		super(SHIP_TYPES.MEDIUM);
	}
	
	public MediumShip(Ship shipToCopy) {
		super(SHIP_TYPES.MEDIUM);
		ShipCell[] cellsToCopy = shipToCopy.getCells();
		for (int i = 0; i < SHIP_TYPES.MEDIUM; i++) {
			cells[i] = cellsToCopy[i];
		}
	}
	
	public void copy(Ship shipToCopy) {
		ShipCell[] cellsToCopy = shipToCopy.getCells();
		for (int i = 0; i < SHIP_TYPES.MEDIUM; i++) {
			cells[i] = cellsToCopy[i];
		}
	}
}
