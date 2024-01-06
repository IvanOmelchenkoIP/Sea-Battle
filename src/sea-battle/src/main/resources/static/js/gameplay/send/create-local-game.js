"use strict";

import fetchUtil from "../../utils/fetch/fetch-util";
import initLocalGameCallback from "./callbacks/local-success-callback.js";

const createLocalGame = () => {
  fetchUtil.post({
    route: "http://localhost:8080/game/init/multiplayer/local",
    successCallback: initLocalGameCallback,
  });
};

export default createLocalGame;
