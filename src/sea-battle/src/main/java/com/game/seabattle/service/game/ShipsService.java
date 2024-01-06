package com.game.seabattle.service.game;

import java.awt.Point;
import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.game.seabattle.model.gameplay.ship.Boat;
import com.game.seabattle.model.gameplay.ship.LargeShip;
import com.game.seabattle.model.gameplay.ship.MediumShip;
import com.game.seabattle.model.gameplay.ship.Ship;
import com.game.seabattle.model.gameplay.ship.ShipStates;
import com.game.seabattle.model.gameplay.ship.ShipsCollection;
import com.game.seabattle.model.gameplay.ship.SmallShip;
import com.game.seabattle.model.gameplay.ship.cell.ShipCell;
import com.game.seabattle.model.gameplay.ship.cell.ShipCellStates;

@Service
public class ShipsService {
	
	public ShipsCollection parseShips(String json) {
		ShipsCollection ships = new ShipsCollection();
		String[] jsonParts = json.split("ship_\\d");
		for (int i = 1; i < jsonParts.length; i++) {
			String jsonPart = jsonParts[i];
			String[] cellsData = jsonPart.split("cell_\\d");
			int cellDataParts = cellsData.length;
			Ship ship = null;
			switch(cellDataParts)
			{
			case 2 -> ship = new Boat();
			case 3 -> ship = new SmallShip();
			case 4 -> ship = new MediumShip();
			case 5 -> ship = new LargeShip();
			}
			for (int j = 1; j < cellDataParts; j++) {
				String[] coordParts = cellsData[j].split("\\D+");
				int x = Integer.parseInt(coordParts[1]);
				int y = Integer.parseInt(coordParts[2]);
				ShipCell cell = new ShipCell(x, y);
				if (ship != null) {
					ship.addCell(j - 1, cell);
				}
			}
			ships.addShip(i - 1, ship);
		}
		return ships;
	}
	
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
