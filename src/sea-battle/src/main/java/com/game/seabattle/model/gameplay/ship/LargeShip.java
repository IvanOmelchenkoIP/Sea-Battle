package com.game.seabattle.model.gameplay.ship;

import com.game.seabattle.model.gameplay.ship.cell.ShipCell;

public class LargeShip extends Ship {

	public LargeShip() {
		super(SHIP_TYPES.LARGE);
	}
	
	public LargeShip(Ship shipToCopy) {
		super(SHIP_TYPES.LARGE);
		ShipCell[] cellsToCopy = shipToCopy.getCells();
		for (int i = 0; i < SHIP_TYPES.LARGE; i++) {
			cells[i] = cellsToCopy[i];
		}
	}
	
	public void copy(Ship shipToCopy) {
		ShipCell[] cellsToCopy = shipToCopy.getCells();
		for (int i = 0; i < SHIP_TYPES.LARGE; i++) {
			cells[i] = cellsToCopy[i];
		}
	}
}
