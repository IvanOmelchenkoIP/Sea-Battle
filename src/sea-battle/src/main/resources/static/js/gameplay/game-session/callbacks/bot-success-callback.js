"use strict";

import context from "../../../context/context.js";
import registerGameContextCallback from "./register-game-context.js";

const initBotGameCallback = (json) => {
	const response = JSON.parse(json);
	registerGameContextCallback(response, context.game.gamemode.SINGLEPLAYER);
}

export default initBotGameCallback;
