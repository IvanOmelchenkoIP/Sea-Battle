package com.game.seabattle.model.gameplay.ship;

import com.game.seabattle.model.gameplay.ship.cell.ShipCell;

public class SmallShip extends Ship {

	public SmallShip() {
		super();
		cells = new ShipCell[ShipSizes.SMALL_SHIP_SIZE];
	}
}
