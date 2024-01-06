"use strict";

import context from "../../context/context.js";
import domSelector from "../../utils/html-utils/html-utils.js";

const playerConnectedCallback = (message) => {
  if (context.game.player2) return;
  domSelector.document
    .selectFirstByClass("message-area")
    .classList.add("display-none");
  const gameArea = domSelector.document.selectFirstByClass("game-area");
  gameArea.classList.remove("display-none");
  const player1Side = domSelector.selectFirstByClass(
    gameArea,
    "board-side player-1"
  );
  const player2Side = domSelector.selectFirstByClass(
    gameArea,
    "board-side player-2"
  );
  context.htmlCache.set("player1Side", player1Side);
  context.htmlCache.set("player2Side", player2Side);
  domSelector
    .selectFirstByClass(player1Side, "game-board-wrapper")
    .classList.remove("display-none");
  domSelector
    .selectFirstByClass(player2Side, "ship-selection-wrapper")
    .classList.remove("display-none");
};

export default playerConnectedCallback;
