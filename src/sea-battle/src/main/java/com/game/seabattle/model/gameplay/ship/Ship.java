package com.game.seabattle.model.gameplay.ship;

import com.game.seabattle.model.gameplay.ship.cell.ShipCell;

public abstract class Ship {
	
	protected static class SHIP_TYPES {
		public static final int LARGE = 4;
		public static final int MEDIUM = 3;
		public static final int SMALL = 2;
		public static final int BOAT = 1;
	}
	
	protected ShipCell[] cells;
	
	private ShipStates state;
	
	public Ship(int size) {
		state = ShipStates.CLEAN;
		cells = new ShipCell[size];
	}
	
	public void setState(ShipStates state) {
		this.state = state;
	}
	
	public void addCell(int i, ShipCell cell) {
		cells[i] = cell;
	}
	
	public ShipCell[] getCells() {
		return cells;
	}
	
	public boolean isDestroyed() {
		return state == ShipStates.DESTROYED;
	}
	
	public abstract void copy(Ship shipToCopy);
}
