"use strict";

import playerConnectedCallback from "./player-connected-callback.js";
import player1BoardCallback from "./player1-board-callback.js";
import player1ShipsCallback from "./player1-ships-callback.js";
import player2BoardCallback from "./player2-board-callback.js";
import player2ShipsCallback from "./player2-ships-callback.js";

const MESSAGE_TYPES = {
  player_connected: (response) => {
    playerConnectedCallback(response);
  },
  player1_board: (response) => {
    player1BoardCallback(response);
  },
  player2_board: (response) => {
    player2BoardCallback(response);
  },
  player1_ships: (response) => {
    player1ShipsCallback(response);
  },
  player2_ships: (response) => {
    player2ShipsCallback(response);
  },
};

const showServerResponse = (response) => {
  const message = JSON.parse(JSON.parse(response.body).message);
  const messageType = message["response_type"];
  console.log(messageType);
  MESSAGE_TYPES[messageType](message);
};

export default showServerResponse;
