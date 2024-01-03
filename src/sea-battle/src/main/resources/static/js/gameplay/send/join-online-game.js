"use strict";

import fetchUtil from "../../utils/fetch/fetch-util.js";
import initOnlineGameCallback from "./callbacks/online-success-callback.js";
import joinErrorCallback from "./callbacks/join-error-callback.js";

const joinOnlineGame = (gameId) => {
	console.log(gameId);
	if (!gameId) {
		joinErrorCallback("Enter game id before joining!");
		return;
	}
	const data = { gameId: gameId };
	fetchUtil.post({route: "http://localhost:8080/game/connect", data: data, successCallback: initOnlineGameCallback, errorCallback: joinErrorCallback});
}

export default joinOnlineGame;
