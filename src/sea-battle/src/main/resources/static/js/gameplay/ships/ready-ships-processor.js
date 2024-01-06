"use strict";

import context from "../../context/context.js";
import domSelector from "../../utils/html-utils/html-utils.js";
import postShipsPlaced from "../../ws/post/post-ships-placed.js";

const readyShipsProcessor = () => {
  if (context.game.in_progress) return;
  const leftObj = context.shipPlacement.context.left;
  const keys = Object.keys(leftObj);
  for (const key of keys) {
    if (leftObj[key] > 0) return;
  }
  setTimeout(() => {
    const player1Side = context.htmlCache.get("player1Side");
    const player2Side = context.htmlCache.get("player2Side");
    let playerId;
    if (context.game.player1) {
      playerId = context.game.player1;
      domSelector
        .selectFirstByClass(player2Side, "ship-selection-wrapper")
        .classList.add("display-none");
      domSelector
        .selectFirstByClass(player2Side, "game-board-wrapper")
        .classList.remove("display-none");

      domSelector.selectFirstByClass(player1Side, "game-grid").classList.add("personal", "locked");
      domSelector.selectFirstByClass(player2Side, "game-grid").classList.add("locked");
    } else {
      playerId = context.game.player2;
      domSelector
        .selectFirstByClass(player1Side, "ship-selection-wrapper")
        .classList.add("display-none");
      domSelector
        .selectFirstByClass(player1Side, "game-board-wrapper").classList.remove("display-none");

      domSelector.selectFirstByClass(player2Side, "game-grid").classList.add("personal", "locked");
      domSelector.selectFirstByClass(player1Side, "game-grid").classList.add("locked");
    }
    const ships = context.shipPlacement.context.ships;
    const shipsObj = {};
    for (let i = 0; i < ships.length; i++) {
        const ship = ships[i];
        const length = ship.length;
        const shipObj = {};
        shipObj.length = length;
        for (let i = 0; i < length; i++) {
            shipObj["cell_" + i] = { x: ship[i][0] , y: ship[i][1] };
        }
        shipsObj["ship_" + i] = shipObj;
    }
    postShipsPlaced(
      context.game.gameId,
      playerId,
      JSON.stringify(shipsObj)
    );
  }, 1000);
};

export default readyShipsProcessor;
