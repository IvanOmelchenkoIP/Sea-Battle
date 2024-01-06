"use strict";

import context from "../../context/context.js";
import postMove from "../../ws/messages/post-move.js";

const moveProcessor = (cell) => {
  const x = cell.classList[2].split("-")[1];
  const y = cell.classList[1].split("-")[1];
  const playerId = context.game.player1
    ? context.game.player1
    : context.game.player2;
  postMove(context.game.gameId, playerId, x, y);
};

export default moveProcessor;
