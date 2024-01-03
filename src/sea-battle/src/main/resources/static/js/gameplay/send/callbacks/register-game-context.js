"use strict";

import context from "../../../context/context.js";

const registerGameContextCallback = (response, mode) => {
	const game = context.game;	
	const responseKeys = Object.keys(response);
	for (const key of responseKeys) {
		game[key] = response[key];
	}
	game.gamemode = mode;
	game.turn = game.turns.PLAYER_1;
}

export default registerGameContextCallback;
