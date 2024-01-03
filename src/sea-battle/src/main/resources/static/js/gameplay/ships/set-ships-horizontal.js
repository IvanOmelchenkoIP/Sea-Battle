"use strict";

import domSelector from "../../utils/html-utils/html-utils.js"

const setShipsHorizontal = () => {
	const ships = domSelector.document.selectAllByClass("ship-selector");
	for (const ship of ships) {
		ship.classList.remove("vertical");
		ship.classList.add("horizontal");
	}
}

export default setShipsHorizontal;
