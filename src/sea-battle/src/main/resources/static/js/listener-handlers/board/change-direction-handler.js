"use strict";

import context from "../../context/context.js";
import setShipsHorizontal from "../../gameplay/ships/set-ships-horizontal.js";
import setShipsVertical from "../../gameplay/ships/set-ships-vertical.js";

const changeShipsDirectionHandler = () => {
	const ships = context.shipPlacement.context;
	if (ships.direction == ships.DIRECTIONS.HORIZONTAL) {
		setShipsHorizontal();
		ships.direction = ships.DIRECTIONS.VERTICAL;
	} else {
		setShipsVertical();
		ships.direction = ships.DIRECTIONS.HORIZONTAL;
	}
}

export default changeShipsDirectionHandler;
