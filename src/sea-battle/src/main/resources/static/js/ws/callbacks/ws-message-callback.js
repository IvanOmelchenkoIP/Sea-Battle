"use strict";

import playerConnectedCallback from "./responses/player-connected-callback.js";
import shipsPlacedCallback from "./responses/ships-placed-callback.js";
import moveMadeCallback from "./responses/move-made-callback.js";

const MESSAGE_TYPES = {
  player_connected: (response) => {
    playerConnectedCallback(response);
  },
  ships_placed: (response) => {
    shipsPlacedCallback(response);
  },
  move_made: (response) => {
    moveMadeCallback(response);
  },
};

const wsMessageCallback = (response) => {
  const message = JSON.parse(JSON.parse(response.body).message);
  const messageType = message["response_type"];
  console.log(message);
  MESSAGE_TYPES[messageType](message);
};

export default wsMessageCallback;
