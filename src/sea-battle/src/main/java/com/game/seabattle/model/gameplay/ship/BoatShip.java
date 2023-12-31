package com.game.seabattle.model.gameplay.ship;

import com.game.seabattle.model.gameplay.ship.cell.ShipCell;

public class BoatShip extends Ship {

	public BoatShip() {
		super();
		cells = new ShipCell[ShipSizes.BOAT_SIZE];
	}
}
