"use strict";

import context from "../../../context/context.js";
import registerGameContextCallback from "./register-game-context.js";

const onlineGameCallback = (json) => {
  const response = JSON.parse(json);
  registerGameContextCallback(
    response,
    context.game.gamemodes.MULTIPLAYER_ONLINE
  );
  context.backup();
  window.location.replace("http://localhost:8080/game");
};

export default onlineGameCallback;
