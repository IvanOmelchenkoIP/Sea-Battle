package com.game.seabattle.service.game;

import java.awt.Point;
import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.game.seabattle.model.gameplay.board.Board;
import com.game.seabattle.model.gameplay.board.cell.Cell;
import com.game.seabattle.model.gameplay.board.cell.CellStates;
import com.game.seabattle.model.gameplay.ship.Boat;
import com.game.seabattle.model.gameplay.ship.LargeShip;
import com.game.seabattle.model.gameplay.ship.MediumShip;
import com.game.seabattle.model.gameplay.ship.Ship;
import com.game.seabattle.model.gameplay.ship.ShipsCollection;
import com.game.seabattle.model.gameplay.ship.SmallShip;
import com.game.seabattle.model.gameplay.ship.cell.ShipCell;

@Service
public class BoardService {

	private void applyCellState(Board board, int x, int y, CellStates state) {
		boolean xValid = x >= 0 && x < 10;
		boolean yValid = y >= 0 && y < 10;
		if (xValid && yValid) {
			Cell cell = board.getBoard()[y][x];
			cell.setState(state);
		}
	}

	private boolean cellIsClean(Board board, int x, int y) {
		boolean xValid = x >= 0 && x < 10;
		boolean yValid = y >= 0 && y < 10;
		if (xValid && yValid) {
			Cell cell = board.getBoard()[y][x];
			if (cell.getState() == CellStates.EMPTY) {
				return true;
			}
		}
		return false;
	}

	private void applyCellStateIfClean(Board board, int x, int y, CellStates state) {
		if (cellIsClean(board, x, y)) {
			applyCellState(board, x, y, state);
		}
	}

	private void cellUnhit(Board board, Point coords) {
		applyCellState(board, coords.x, coords.y, CellStates.MISS);
	}

	private void cellHit(Board board, Point coords) {
		applyCellState(board, coords.x, coords.y, CellStates.HIT);
	}

	private void shipDestroyed(Board board, Ship ship) {
		ShipCell[] shipCells = ship.getCells();
		for (ShipCell shipCell : shipCells) {
			Point coords = shipCell.getCoords();
			int x = coords.x;
			int y = coords.y;
			applyCellState(board, x, y, CellStates.DESTROYED);
			applyCellStateIfClean(board, x - 1, y + 1, CellStates.MISS);
			applyCellStateIfClean(board, x, y + 1, CellStates.MISS);
			applyCellStateIfClean(board, x + 1, y + 1, CellStates.MISS);
			applyCellStateIfClean(board, x - 1, y, CellStates.MISS);
			applyCellStateIfClean(board, x + 1, y, CellStates.MISS);
			applyCellStateIfClean(board, x - 1, y - 1, CellStates.MISS);
			applyCellStateIfClean(board, x, y - 1, CellStates.MISS);
			applyCellStateIfClean(board, x + 1, y - 1, CellStates.MISS);
		}
	}

	public Board updateBoard(Board board, Point coords, boolean isHit, Ship ship) {
		if (isHit == false) {
			cellUnhit(board, coords);
		} else {
			if (ship == null) {
				cellHit(board, coords);
			} else {
				shipDestroyed(board, ship);
			}
		}
		return board;
	}

	public void parseShips(Board board, String json) {
		String[] jsonParts = json.split("ship_\\d");
		for (int i = 1; i < jsonParts.length; i++) {
			String jsonPart = jsonParts[i];
			String[] cellsData = jsonPart.split("cell_\\d");
			for (int j = 1; j < cellsData.length; j++) {
				String[] coordParts = cellsData[j].split("\\D+");
				int x = Integer.parseInt(coordParts[1]);
				int y = Integer.parseInt(coordParts[2]);
				board.addShipCoord(x, y);;
			}
		}

	}
}
