package com.game.seabattle.model.gameplay.ship.cell;

import java.awt.Point;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ShipCell {
	
	private ShipCellStates state;
	private Point coords;
	
	public ShipCell() {
		state = ShipCellStates.CLEAN;
	}
}
