package com.game.seabattle.model.gameplay.ship;

import com.game.seabattle.model.gameplay.ship.cell.ShipCell;

public abstract class Ship {

	protected static class ShipSizes {
		
		public static final int BOAT_SIZE = 1;
		public static final int SMALL_SHIP_SIZE = 2;
		public static final int MEDIUM_SHIP_SIZE = 3;
		public static final int LARGE_SHIP_SIZE = 4;
	}
	
	private ShipStates state;
	protected ShipCell[] cells;
	
	public Ship() {
		state = ShipStates.CLEAN;
	}
	
	public void setState(ShipStates state) {
		this.state = state;
	}
	
	public ShipCell[] getCells() {
		return cells;
	}
	
	public boolean isDestroyed() {
		return state == ShipStates.DESTROYED;
	}
}
