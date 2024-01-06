"use strict";

const DIRECTIONS = {
  HORIZONTAL: 0,
  VERTICAL: 1,
};

class ShipPlacementContextClass {
  constructor() {
    this.left = {
      1: 4,
      2: 3,
      3: 2,
      4: 1,
    };
    this.ships = [];
    this.DIRECTIONS = DIRECTIONS;
    this.direction = DIRECTIONS.HORIZONTAL;
    this.shipParams = {
      isSelected: false,
      length: null,
      coords: [],
      ship: null,
    };
  }

  addShipCoords(coords) {
    this.ships.push(coords);
  }

  getShipsPlacement() {
    return this.ships.toString();
  }
}

const shipPlacementContext = {
  context: new ShipPlacementContextClass(),
  getNew: () => {
    //shipPlacementContext.clear();
    shipPlacementContext.context = new ShipPlacementContextClass();
  },
  clear: () => {
    shipPlacementContext.context = null;
  },
};

export default shipPlacementContext;
