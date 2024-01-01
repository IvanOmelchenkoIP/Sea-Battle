package com.game.seabattle.model.gameplay.board;

import com.game.seabattle.model.gameplay.board.cell.Cell;

public class Board {

	private Cell[][] board;
	
	public Board() {
		board = new Cell[10][10];
	}
}
