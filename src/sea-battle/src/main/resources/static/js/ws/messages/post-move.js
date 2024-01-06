"use strict";

import fetchUtil from "../../utils/fetch/fetch-util.js";

const postMove = (gameId, playerId, x, y) => {
  fetchUtil.post({
    route: "http://localhost:8080/ws/move",
    data: {
      gameId: gameId,
      playerId: playerId,
      coordX: x,
      coordY: y,
    },
  });
};

export default postMove;
