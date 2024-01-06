"use strict";

import context from "../../context/context.js";
import destroySuccessCallback from "../../gameplay/send/callbacks/destroy-success-callback.js";
import fetchUtil from "../../utils/fetch/fetch-util.js";

const cancelGameHandler = (evt) => {
  fetchUtil.delete({
    route: "http://localhost:8080/game/destroy",
    data: { gameId: context.game.gameId },
    successCallback: destroySuccessCallback,
  });
};

export default cancelGameHandler;
