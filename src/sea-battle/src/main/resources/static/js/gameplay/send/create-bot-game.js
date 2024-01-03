"use strict";

import fetchUtil from "../../utils/fetch/fetch-util";
import initBotGameCallback from "./callbacks/bot-success-callback.js";

const createBotGame = () => {
	fetchUtil.post({route: "http://localhost:8080/game/init/singleplayer", successCallback: initBotGameCallback});
}

export default createBotGame;
