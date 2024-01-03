"use strict";

import context from "../../context/context.js";
import domSelector from "../../utils/html-utils/html-utils.js";

const highlightCoordsCells = (board, coords) => {
	const cells = []
	for (const coord of coords) {
		const x = coord[0];
		const y = coord[1]; 
		const classY = "y-" + x;
		const classX = "x-" + y;
		const cell = domSelector.select.selectFirstByClass(board, classY + " " + classX);
		if (cell.classList.length > 3) return false;
		cells.append(cell);
	}
	for (const cell of cells) cell.classList.add("highlighted");
	return true;
}

const verticalDragHandler = (x, y, cellDragged, length) => {
	let dragged = cellDragged;
	const coords = [];
	const counter = 0;
	while (dragged > 0) {
		const newY = y - counter;
		if (newY < 0) return [];
		coords.append([x, newY]);
		counter += 1;
		dragged -= 1;
	}
	counter = 1;
	dragged = cellDragged;
	while(dragged < length) {
		const newY = y + counter;
		if (newY > length - 1) return [];
		coords.append([x, newY]);
		counter += 1;
		dragged += 1;
	}
	return coords;
}

const horizontalDragHandler = (x, y, cellDragged, length) => {
	let dragged = cellDragged;
	const coords = [];
	const counter = 0;
	while (dragged > 0) {
		const newX = x - counter;
		if (newX < 0) return [];
		coords.append([newX, y]);
		counter += 1;
		dragged -= 1;
	}
	counter = 1;
	dragged = cellDragged;
	while(dragged < length) {
		const newX = x + counter;
		if (newX > length - 1) return [];
		coords.append([newX, y]);
		counter += 1;
		dragged += 1;
	}
	return coords;
}

const shipDraggedHandler = (board, cell) => {
	const y = Number(cell.classList[1].split("-")[1]);
	const x = Number(cell.classList[2].split("-")[1]);
	const length = shipContext.shipParams.length;
	const cellDragged = shipContext.shipParams.cell;
	coords = [];
	if (shipContext.direction == shipContext.direction.VERTICAL) {
		coords = verticalDragHandler(x, y, cellDragged, length);
	} else {
		coords = horizontalDragHandler(x, y, cellDragged, length);
	}
	if (!coords.length()) return;
	const highlightable = highlightCoordsCells(coords);
	if (highlightable) shipContext.placementCoords = coords;
}

const cellEnterHoverHandler = (evt) => {
	const cell = evt.target
	const board = cell.parentElement;
	if (board.classList[2] == "locked") return;
	const ship = context.shipPlacement.context;
	if (ship.isShipDragged) {
		shipDraggedHandler(board, cell);
	}
}

export default cellEnterHoverHandler;
