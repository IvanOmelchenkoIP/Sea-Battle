package com.game.seabattle.model.gameplay.board;

import java.util.Arrays;

import com.game.seabattle.model.gameplay.board.cell.Cell;

public class Board {
	
	private final static int SIZE = 10;

	private Cell[][] board;
	
	public Board() {
		board = new Cell[SIZE][SIZE];
		for (int i = 0; i < SIZE; i++) {
			for (int j = 0; j < SIZE; j++) {
				board[i][j] = new Cell();
			}
		}
	}
	
	public Cell[][] getBoard() {
		return board;
	}
	
	@Override
	public String toString() {
		int[][] intBoard = new int[SIZE][SIZE];
		for (int i = 0; i < SIZE; i++) {
			for (int j = 0; j < SIZE; j++) {
				intBoard[i][j] = board[i][j].getState().ordinal();
			}
		}
		return Arrays.deepToString(intBoard);
	}
}
