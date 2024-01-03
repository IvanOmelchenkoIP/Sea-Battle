"use strict";

import context from "../../context/context.js";

const dehighlightCells = (board, coords) => {
	for (const coord of coords) {
		const x = coord[0];
		const y = coord[1];
		const classY = "y-" + y;
		const classX = "x-" + x;
		domSelector.select.selectFirstByClass(board, classY + " " + classX).remove("highlighted");
	}
}

const cellLeaveHoverHandler = (evt) => {
	const cell = evt.target
	const board = cell.parentElement;
	if (board.classList[2] == "locked") return;
	const ship = context.shipPlacement.context;
	if (ship.isShipDragged) {
		const coords = shipContext.placementCoords;
		dehighlightCells(board, coords);
	}
}

export default cellLeaveHoverHandler;