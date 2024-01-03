"use strict";

const DIRECTIONS = {
	HORIZONTAL: 0,
	VERTICAL: 1,
};

class ShipPlacementContextClass {
	constructor () {
		this.left = {
			"size-1": 4,
			"size-2": 3, 
			"size-3": 2,
			"size-4": 1
		};
		this.ships = {};
		this.DIRECTIONS = DIRECTIONS;
		this.direction  = DIRECTIONS.HORIZONTAL;
		this.isShipDragged = false;
		this.shipParams = {
			cell: null,
			length: null,
			initCoords: {x: null, y: null},
			type: null,
		};
		this.copied = null;
		this.placementCoords = [];
	}
	
	addShip(size, data) {
		const ship = {};
		ship[size] = data;
		this.ships.append(ship);
	}
	
	getShipsPlacement() {
		return this.ships.toString();
	}
	
	copy(ship) {
		this.copied = JSON.parse(JSON.stringify(ship));
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
	}
}

export default shipPlacementContext;
