"use strict";

import fetchUtil from "../../utils/fetch/fetch-util.js";
import onlineGameCallback from "./callbacks/online-success-callback.js";
import joinErrorCallback from "./callbacks/join-error-callback.js";

const joinOnlineGame = (id) => {
  if (!id) {
    joinErrorCallback("Enter game id before joining!");
    return;
  }
  fetchUtil.post({
    route: "http://localhost:8080/game/join",
    data: { "gameId": id },
    successCallback: onlineGameCallback,
    errorCallback: joinErrorCallback,
  });
};

export default joinOnlineGame;
