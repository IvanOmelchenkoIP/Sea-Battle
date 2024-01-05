"use strict";

import fetchUtil from "../../utils/fetch/fetch-util.js";
import onlineSuccessCallback from "./callbacks/online-success-callback.js";

const createOnlineGame = () => {
	fetchUtil.post({route: "http://localhost:8080/game/init/multiplayer/online", successCallback: onlineSuccessCallback});
};

export default createOnlineGame;
