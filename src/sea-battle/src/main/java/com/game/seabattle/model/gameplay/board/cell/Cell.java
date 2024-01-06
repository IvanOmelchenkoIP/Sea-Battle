package com.game.seabattle.model.gameplay.board.cell;

public class Cell {

	private CellStates state;
	
	public Cell() {
		state = CellStates.EMPTY;
	}
	
	public void setState(CellStates state) {
		this.state = state;
	}
	
	public CellStates getState() {
		return state;
	}
}
