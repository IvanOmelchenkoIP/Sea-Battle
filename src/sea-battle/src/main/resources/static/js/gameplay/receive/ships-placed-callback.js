"use strict";

import context from "../../context/context.js";
import domSelector from "../../utils/html-utils/html-utils.js";

const shipsPlacedCallback = (message) => {
  const player1Id = context.game.player1;
  const player2Id = context.game.player2;
  console.log(message.playerId);
  if (player1Id) {
    if (player1Id == message.playerId) {
      context.game.player1_ready = true;
    } else {
      context.game.player2_ready = true;
    }
  } else if (player2Id) {
    if (player2Id == message.playerId) {
      context.game.player2_ready = true;
    } else {
      context.game.player1_ready = true;
    }
  }

  if (context.game.player1_ready && context.game.player2_ready) {
    context.game.in_progress = true;
    context.game.turn = context.game.turns.PLAYER_1;
    const cells = domSelector.document.selectAllByClass("cell");
    for (const cell of cells) {
      cell.classList.remove("blocked", "highlighted");
    }
    if (player1Id) {
      const opponentSide = context.htmlCache.get("player2Side");
      domSelector
        .selectFirstByClass(opponentSide, "game-grid")
        .classList.remove("locked");
    }
  }
};

export default shipsPlacedCallback;
