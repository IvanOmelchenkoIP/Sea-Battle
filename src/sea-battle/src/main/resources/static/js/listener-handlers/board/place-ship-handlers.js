"use strict";

import context from "../../context/context.js";
import domSelector from "../../utils/html-utils/html-utils.js";

const placeShipProcessor = (ship) => {
  const shipSelectHandler = () => {
    const shipContext = context.shipPlacement.context;
    const length = ship.classList[1].split("-")[1];
    if (ship.classList.contains("blocked")) return;
    const previous = domSelector.document.selectFirstByClass(
      "ship-selector selected"
    );
    if (previous) previous.classList.remove("selected");
    shipContext.shipParams.isSelected = true;
    shipContext.shipParams.length = length;
    shipContext.shipParams.ship = ship;
    ship.classList.add("selected");
  };

  ship.addEventListener("click", shipSelectHandler);
};

export default placeShipProcessor;
