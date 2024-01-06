"use strict";

const gamemodes = {
  SINGLEPLAYER: 0,
  MULTIPLAYER_LOCAL: 1,
  MULTIPLAYER_ONLINE: 2,
};

const turns = {
  PLAYER_1: 1,
  PLAYER_2: 2,
  NONE: -100,
};

const game = {
  gamemodes: gamemodes,
  turns: turns,
  gameId: null,
  player1: null,
  player2: null,
  gamemode: null,
  in_progress: false,
  turn: turns.NONE,
  player1_ready: false,
  player2_ready: false,
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
