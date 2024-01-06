package com.game.seabattle.model.gameplay.ship;

public class ShipsCollection {

	private Ship[] ships;
	
	public ShipsCollection() {
		ships = new Ship[10];
	}
	
	public void addShip(int i, Ship ship) {
		ships[i] = ship;
	}
	
	public Ship[] getShips() {
		return ships;
	}
	
	public void copy(ShipsCollection shipsToClone) {
		Ship[] shipsArr = shipsToClone.getShips();
		for (int i = 0; i < 10; i++) {
			Ship ship = shipsArr[i];
			switch(ship.getCells().length)
			{
			case 1 -> ships[i] = new Boat(ship);
			case 2 -> ships[i] = new SmallShip(ship);
			case 3 -> ships[i] = new MediumShip(ship);
			case 4 -> ships[i] = new LargeShip(ship);
			}
		}
	}
}
