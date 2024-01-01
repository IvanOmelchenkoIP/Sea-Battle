package com.game.seabattle.model.gameplay.ship.cell;

import java.awt.Point;

public class ShipCell {
	
	private ShipCellStates state;
	private Point coords;
	
	public ShipCell(int x, int y) {
		state = ShipCellStates.CLEAN;
		coords = new Point(x, y);
	}
	
	public Point getCoords() {
		return coords;
	}
	
	public void setState(ShipCellStates state) {
		this.state = state;
	}
	
	public ShipCellStates getState() {
		return state;
	}
}
