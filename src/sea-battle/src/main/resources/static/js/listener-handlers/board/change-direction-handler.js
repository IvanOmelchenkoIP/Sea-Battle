"use strict";

import context from "../../context/context.js";
import setShipsHorizontal from "../../gameplay/ships/set-ships-horizontal.js";
import setShipsVertical from "../../gameplay/ships/set-ships-vertical.js";

const changeDirectionHandler = (evt) => {
	console.log("called");
	const ships = context.shipPlacement.context;
	console.log(ships.direction);
	if (ships.direction == ships.DIRECTIONS.HORIZONTAL) {
		ships.direction = ships.DIRECTIONS.VERTICAL;
		setShipsVertical();
	} else {
		ships.direction = ships.DIRECTIONS.HORIZONTAL;
		setShipsHorizontal();
	}
	console.log(context.shipPlacement.context.direction);
}

export default changeDirectionHandler;
