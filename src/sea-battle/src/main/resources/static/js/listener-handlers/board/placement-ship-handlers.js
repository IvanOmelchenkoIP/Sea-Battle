"use strict";

import context from "../../context/context.js";
import domSelector from "../../utils/html-utils/html-utils.js";

const placementShipDragHandler = (evt) => {
	evt.preventDefault();
	const ship = evt.taget.parentElement;
	const shipContext = context.shipPlacement.context;
	const oldX = shipContext.shipParams.initCoords.x;
	const oldY = shipContext.shipParams.initCoords.y;
	shipContext.shipParams.initCoords.x = evt.clientX;
	shipContext.shipParams.initCoords.x = evt.clientY;
	ship.style.top = (ship.offsetTop - oldY) + "px";
	ship.style.top = (ship.offsetLeft - oldX) + "px";
}

const placementShipReleaseHandler = (evt) => {
	const shipContext = context.shipPlacement.context;
	const type = shipContext.shipParams.type;
	const ship = evt.taget.parentElement;
	const shipWrapper = ship.parentElement; 
	const placementCoords = shipContext.placementCoords;
	if (placementCoords.legth > 0) {
		let left = shipContext.left[type];
		left -= 1
		shipContext.left[type] = left;
		domSelector.selectFirstByTag(shipWrapper, "span").innerText = left;
	}
	const copied = shipContext.copied;
	shipWrapper.prepend(copied);
	copied.addEventListener("mousedown", placementShipMousedownHandler);
	shipContext.isShipDragged = false;
	shipContext.copied = null;
	shipContext.placementCoords = [];
	ship.remove();
}


const placementShipMousedownHandler = (evt) => {
	const target = evt.target;
	const cellSelected = target.classList[1];
	const ship = target.parentElement;
	const type = ship.classList[1];
	const length = type.split("-")[1];
	const shipContext = context.shipPlacement.context;
	if (shipContext.left[type] == 0) return; 
	shipContext.isShipDragged = true;
	shipContext.copy(ship);
	shipContext.shipParams.cell = Number(cellSelected);
	shipContext.shipParams.type = type;
	shipContext.shipParams.length = Number(length);
	shipContext.shipParams.initCoords.x = evt.clientX;
	shipContext.shipParams.initCoords.x = evt.clientY;
	ship.addEventListener("mousedrag", placementShipDragHandler);
	ship.addEventListener("mouseup", placementShipReleaseHandler);
}

export default placementShipMousedownHandler;
