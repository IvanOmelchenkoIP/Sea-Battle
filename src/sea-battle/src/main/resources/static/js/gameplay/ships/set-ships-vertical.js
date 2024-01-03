"use strict";

import domSelector from "../../utils/html-utils/html-utils.js"

const setShipsVertical = () => {
	const ships = domSelector.document.selectAllByClass("ship-selector");
	for (const ship of ships) {
		ship.classList.remove("horizontal");
		ship.classList.add("vertical");
	}
}

export default setShipsVertical;
