"use strict";

const gamemodes = {
  SINGLEPLAYER: 0,
  MULTIPLAYER_LOCAL: 1,
  MULTIPLAYER_ONLINE: 2,
};

const turns = {
  PLAYER_1: 0,
  PLAYER_2: 1,
};

const game = {
  gamemodes: gamemodes,
  turns: turns,
  gameId: null,
  player1: null,
  player2: null,
  gamemode: null,
  in_progress: false,
  turn: null,
  BOARD_SIZE: 10,
  clear: () => {
    game.gameId = null;
    game.player1 = null;
    game.player2 = null;
    game.gamemode = null;
  },
  getData: () => {
    return {
      turn: game.turn,
      gameId: game.gameId,
      player1: game.player1,
      player2: game.player2,
      gamemode: game.gamemode,
      in_progress: game.in_progress,
    };
  },
  fillData: (data) => {
    const keys = Object.keys(data);
    for (const key of keys) {
      game[key] = data[key];
    }
  },
};

export default game;
