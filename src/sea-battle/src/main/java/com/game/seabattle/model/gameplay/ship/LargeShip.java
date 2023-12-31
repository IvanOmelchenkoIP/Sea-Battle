package com.game.seabattle.model.gameplay.ship;

import com.game.seabattle.model.gameplay.ship.cell.ShipCell;

public class LargeShip extends Ship {

	public LargeShip() {
		super();
		cells = new ShipCell[ShipSizes.LARGE_SHIP_SIZE];
	}
}
