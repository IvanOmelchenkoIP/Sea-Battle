"use strict";

import ws from "./implementation/ws-context.js";
import game from "./implementation/game-context.js";
import shipPlacementContext from "./implementation/ship-placement-context.js";

let context = {
  shipPlacement: shipPlacementContext,
  ws: ws,
  game: game,
  backup: () => {
    sessionStorage.setItem('game', JSON.stringify(context.game.getData()));
  },
  retrieve: () => {
    context.game.fillData(JSON.parse(sessionStorage.getItem("game")));
    sessionStorage.removeItem("game");
  },
};

export default context;
