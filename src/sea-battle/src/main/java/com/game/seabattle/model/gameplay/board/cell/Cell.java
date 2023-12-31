package com.game.seabattle.model.gameplay.board.cell;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Cell {

	private CellStates state;
	
	public Cell() {
		state = CellStates.EMPTY;
	}
}
