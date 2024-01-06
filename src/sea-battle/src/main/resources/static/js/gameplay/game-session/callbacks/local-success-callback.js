"use strict";

import context from "../../../context/context.js";
import connectWsClient from "../../../ws/connect-client.js";
import registerGameContextCallback from "./register-game-context.js";

const initLocalGameCallback = (json) => {
	const response = JSON.parse(json);
	registerGameContextCallback(response, context.game.gamemode.MULTIPLAYER_LOCAL);
	
}

export default initLocalGameCallback;
