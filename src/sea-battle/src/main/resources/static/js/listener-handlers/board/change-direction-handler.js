"use strict";

import context from "../../context/context.js";
import setShipsHorizontal from "../../gameplay/ships/set-ships-horizontal.js";
import setShipsVertical from "../../gameplay/ships/set-ships-vertical.js";

const changeDirectionHandler = (evt) => {
  const ships = context.shipPlacement.context;
  if (ships.direction == ships.DIRECTIONS.HORIZONTAL) {
    ships.direction = ships.DIRECTIONS.VERTICAL;
    setShipsVertical();
  } else {
    ships.direction = ships.DIRECTIONS.HORIZONTAL;
    setShipsHorizontal();
  }
};

export default changeDirectionHandler;
