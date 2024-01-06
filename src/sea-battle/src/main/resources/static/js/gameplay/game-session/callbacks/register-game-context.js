"use strict";

import context from "../../../context/context.js";

const registerGameContextCallback = (response, mode) => {
  context.game.fillData(response);
  context.game.gamemode = mode;
  context.game.turn = context.game.turns.PLAYER_1;
};

export default registerGameContextCallback;
