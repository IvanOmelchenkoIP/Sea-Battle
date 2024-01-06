"use strict";

import playerConnectedCallback from "./player-connected-callback.js";
import shipsPlacedCallback from "./ships-placed-callback.js";
import moveMadeCallback from "./move-made-callback.js";

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

const showServerResponse = (response) => {
  const message = JSON.parse(JSON.parse(response.body).message);
  const messageType = message["response_type"];
  console.log(message);
  MESSAGE_TYPES[messageType](message);
};

export default showServerResponse;
