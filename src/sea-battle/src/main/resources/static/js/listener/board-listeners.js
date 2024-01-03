"use strict";

import domSelector from "../utils/html-utils/html-utils.js";
import context from "../context/context.js";
import changeShipsDirectionHandler from "../listener-handlers/board/change-direction-handler.js";
import placementShipMousedownHandler from "../listener-handlers/board/placement-ship-handlers.js";
import cellLeaveHoverHandler from "../listener-handlers/board/cell-leave-hover-handler.js";
import cellEnterHoverHandler from "../listener-handlers/board/cell-enter-hover-handler.js";


(() => {
	const changeDirectionBtns = domSelector.document.selectAllByClass("direction-changer");
	for (const button of changeDirectionBtns) {
		button.addEventListener("click", () => {
			context.shipPlacement.getNew();

			changeShipsDirectionHandler();
		})
	}
})();

(() => {
	const ships = domSelector.document.selectAllByClass("ship-selector");
	for (const placeShip of ships) {
		placeShip.addEventListener("mousedown", placementShipMousedownHandler);
	}
})();

(() => {
	const cells = domSelector.document.selectAllByClass("cell");
	for (const cell of cells) {
		cell.addEventListener("mouseenter", cellEnterHoverHandler)
		cell.addEventListener("mouseout", cellLeaveHoverHandler);
	}
})();
