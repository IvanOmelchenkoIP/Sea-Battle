"use strict";

import context from "../../context/context.js";
import domSelector from "../../utils/html-utils/html-utils.js";
import connectWsClient from "../../ws/connect-client.js";
import postPlayerJoined from "../../ws/messages/post-player-joined.js";

const loadNewProcessor = () => {
  const gameId = context.game.gameId;
  context.ws.init();
  connectWsClient(gameId);
  context.shipPlacement.getNew();

  const gamemode = context.game.gamemode;
  const GAMEMODES = context.game.gamemodes;
  const menu = domSelector.document.selectFirstByClass("menu-container");
  domSelector.selectFirstByClass(menu, "menu-id-copyer").children[0].innerText =
    gameId;
  domSelector.selectFirstByClass(
    menu,
    "menu-type-title-container"
  ).children[0].innerText = "Multiplayer Online Game";
  if (gamemode == GAMEMODES.MULTIPLAYER_ONLINE) {
    if (context.game.player2) {
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
      domSelector
        .selectFirstByClass(player1Side, "ship-selection-wrapper")
        .classList.remove("display-none");
      domSelector
        .selectFirstByClass(player2Side, "game-board-wrapper")
        .classList.remove("display-none");
      postPlayerJoined(gameId);
    } else {
      const messageArea =
        domSelector.document.selectFirstByClass("message-area");
      messageArea.classList.remove("display-none");
      domSelector.selectFirstByClass(messageArea, "wait-id-copyer").innerText =
        gameId;
    }
  } else if (gamemode == GAMEMODES.MULTIPLAYER_LOCAL) {
  } else if (gamemode == GAMEMODES.MULTIPLAYER_LOCAL) {
  }
};

export default loadNewProcessor;
