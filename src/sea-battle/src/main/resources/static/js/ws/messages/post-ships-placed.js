"use strict";

import fetchUtil from "../../utils/fetch/fetch-util.js";

const postShipsPlaced = (gameId, playerId, ships) => {
  fetchUtil.post({
    route: "http://localhost:8080/ws/ships",
    data: {
      gameId: gameId,
      playerId: playerId,
      ships: ships,
    },
  });
};

export default postShipsPlaced;
