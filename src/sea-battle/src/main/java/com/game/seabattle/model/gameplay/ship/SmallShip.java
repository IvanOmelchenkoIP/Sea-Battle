package com.game.seabattle.model.gameplay.ship;

import com.game.seabattle.model.gameplay.ship.Ship.SHIP_TYPES;
import com.game.seabattle.model.gameplay.ship.cell.ShipCell;

public class SmallShip extends Ship {

	public SmallShip() {
		super(SHIP_TYPES.SMALL);
	}
	
	public SmallShip(Ship shipToCopy) {
		super(SHIP_TYPES.SMALL);
		ShipCell[] cellsToCopy = shipToCopy.getCells();
		for (int i = 0; i < SHIP_TYPES.SMALL; i++) {
			cells[i] = cellsToCopy[i];
		}
	}
	
	public void copy(Ship shipToCopy) {
		ShipCell[] cellsToCopy = shipToCopy.getCells();
		for (int i = 0; i < SHIP_TYPES.SMALL; i++) {
			cells[i] = cellsToCopy[i];
		}
	}
}
