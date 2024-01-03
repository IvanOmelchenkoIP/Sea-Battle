"use strict";

import fetchUtil from "../../utils/fetch/fetch-util.js";

const createOnlineGame = () => {
	fetchUtil.post({route: "http://localhost:8080/game/init/multiplayer/online", successCallback: console.log});
};

export default createOnlineGame;
