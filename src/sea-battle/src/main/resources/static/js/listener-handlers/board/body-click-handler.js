"use strict";

import context from "../../context/context.js";

const bodyClickHandler = (evt) => {
	const target = evt.target;
	const shipContext = context.shipPlacement.context;
	if (shipContext.shipParams.isSelected) {
		const isCell = target.classList.contains("cell");
		const isDirButton = target.classList.contains("direction-changer");
		const isDirButtonChild = target.parentElement.classList.contains("direction-changer");
		const isShip = target.classList.contains("ship-cell");
		if (isCell || isDirButton || isDirButtonChild || isShip) return;
		shipContext.shipParams.ship.classList.remove("selected");
		shipContext.shipParams.ship = null;
		shipContext.shipParams.isSelected = false;
		shipContext.shipParams.length = null;
		shipContext.coords = [];
	}
}

export default bodyClickHandler;
