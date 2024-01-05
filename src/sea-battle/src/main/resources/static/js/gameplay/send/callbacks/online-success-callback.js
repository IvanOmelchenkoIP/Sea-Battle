"use strict";

import context from "../../../context/context.js";
import registerGameContextCallback from "./register-game-context.js";

const initOnlineGameCallback = (json) => {
	console.log(json);
	const response = JSON.parse(json);
	registerGameContextCallback(response, context.game.gamemode.MULTIPLAYER_ONLINE);
}

export default initOnlineGameCallback;
