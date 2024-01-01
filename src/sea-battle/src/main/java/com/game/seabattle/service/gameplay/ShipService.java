package com.game.seabattle.service.gameplay;

import java.awt.Point;

import org.springframework.stereotype.Service;

import com.game.seabattle.model.gameplay.ship.Ship;
import com.game.seabattle.model.gameplay.ship.ShipStates;
import com.game.seabattle.model.gameplay.ship.cell.ShipCell;
import com.game.seabattle.model.gameplay.ship.cell.ShipCellStates;

@Service
public class ShipService {
	
	private void updateHitStates(Ship ship, ShipCell hitCell) {
		hitCell.setState(ShipCellStates.HIT);
		ShipCell[] cells = ship.getCells();
		for (ShipCell cell : cells) {
			if (cell.getState() == ShipCellStates.CLEAN) {
				return;
			}
		}
		ship.setState(ShipStates.DESTROYED);
	}
	
	public ShipCell findHitCell(Ship ship, Point coords) {
		ShipCell[] cells = ship.getCells();
		for (ShipCell cell : cells) {
			Point pCoords = cell.getCoords();
			if (pCoords.x == coords.x && pCoords.y == coords.y) {
				return cell;
			}
		}
		return null;
	}
	
	public boolean checkAndUpdateHitShip(Ship ship, Point coords) {
		ShipCell cell = findHitCell(ship, coords);
		if (cell != null) {
			updateHitStates(ship, cell);
			return true;
		}
		return false;
	}
}
