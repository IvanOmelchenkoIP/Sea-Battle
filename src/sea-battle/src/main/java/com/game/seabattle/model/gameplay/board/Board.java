package com.game.seabattle.model.gameplay.board;

import java.util.Arrays;

import com.game.seabattle.model.gameplay.board.cell.Cell;

public class Board {
	
	private final static int SIZE = 10;

	private Cell[][] board;
	private int[][] ships;
	private int occupiedCells;
	private int hitCells;
	
	public Board() {
		board = new Cell[SIZE][SIZE];
		ships = new int[SIZE][SIZE];
		occupiedCells = 0;
		hitCells = 0;
		for (int i = 0; i < SIZE; i++) {
			for (int j = 0; j < SIZE; j++) {
				board[i][j] = new Cell();
				ships[i][j] = 0;
			}
		}
	}
	
	public void intHitCells() {
		hitCells += 1;
	}
	
	public Cell[][] getBoard() {
		return board;
	}
	
	public void addShipCoord(int x, int y) {
		occupiedCells += 1;
		ships[y][x] = 1;
	}
	
	public boolean shipsDestroyed() {
		return occupiedCells == hitCells;
	}
	
	public boolean coordIsHit(int x, int y) {
		return ships[y][x] == 1;
	}
	
	public void printShips() {
		for (int i = 0; i < SIZE; i++) {
			for (int j = 0; j < SIZE; i++) {
				System.out.print(ships[i][j] + " ");
			}
			System.out.print("\n");
		}
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
