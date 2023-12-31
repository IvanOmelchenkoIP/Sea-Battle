package com.game.seabattle.model.gameplay.ship;

import com.game.seabattle.model.gameplay.ship.cell.ShipCell;

public class MediumShip extends Ship {
	
	public MediumShip() {
		super();
		cells = new ShipCell[ShipSizes.MEDIUM_SHIP_SIZE];
	}
}
