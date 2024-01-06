"use strict";

import context from "../../../context/context.js";
import domSelector from "../../../utils/html-utils/html-utils.js";
import deleteWsClient from "../../delete-client.js";

const parseBoard = (board) => {
  const transformed = board
    .toString()
    .replaceAll("[[", "")
    .replaceAll("]]", "")
    .replaceAll("[", "")
    .replaceAll("], ", "*");
  console.log(transformed);
  const arr = [];
  const rows = transformed.split("*");
  for (const row of rows) {
    const rowArr = row.split(",");
    arr.push(rowArr);
  }
  return arr;
};

const CELL_CODES = {
  EMPTY: 0,
  MISS: 1,
  HIT: 2,
  DESTROYED: 3,
};

const redrawGrid = (boardGrid, boardArr) => {
  const BOARD_SIZE = context.game.BOARD_SIZE;
  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      const state = boardArr[i][j];
      const classY = "y-" + i;
      const classX = "x-" + i;
      const cell = domSelector.selectFirstByClass(
        boardGrid,
        "cell " + classY + " " + classX
      );
      if (state == CELL_CODES.EMPTY) {
        continue;
      } else if (state == CELL_CODES.MISS) {
        if (!cell.classList.contains("miss")) {
          cell.classList.add("miss");
        }
      } else if (state == CELL_CODES.HIT) {
        if (!cell.classList.contains("hit")) {
          cell.classList.add("hit");
        }
      } else if (state == CELL_CODES.DESTROYED) {
        if (!cell.classList.contains("destroyed")) {
          cell.classList.add("destroyed");
        }
      }
    }
  }
};

const setNextTurn = () => {
  if (context.game.turn == context.game.turns.PLAYER_1) {
    context.game.turn = context.game.turns.PLAYER_2;
    if (context.game.player1) {
      const opponentSide = context.htmlCache.get("player2Side");
      domSelector
        .selectFirstByClass(opponentSide, "game-grid")
        .classList.add("locked");
    } else if (context.game.player2) {
      const opponentSide = context.htmlCache.get("player1Side");
      domSelector
        .selectFirstByClass(opponentSide, "game-grid")
        .classList.remove("locked");
    }
  } else if (context.game.turn == context.game.turns.PLAYER_2) {
    context.game.turn = context.game.turns.PLAYER_1;
    if (context.game.player1) {
      const opponentSide = context.htmlCache.get("player2Side");
      domSelector
        .selectFirstByClass(opponentSide, "game-grid")
        .classList.remove("locked");
    } else if (context.game.player2) {
      const opponentSide = context.htmlCache.get("player1Side");
      domSelector
        .selectFirstByClass(opponentSide, "game-grid")
        .classList.add("locked");
    }
  }
};

const moveMadeCallback = (message) => {
  console.log("here called move");

  const boardArr = parseBoard(message.board);
  let boardGrid;
  if (context.game.turn == context.game.turns.PLAYER_1) {
    boardGrid = domSelector.document.selectFirstByClass("board-side player-2");
  } else if (context.game.turn == context.game.turns.PLAYER_2) {
    boardGrid = domSelector.document.selectFirstByClass("board-side player-1");
  }
  redrawGrid(boardGrid, boardArr);
  if (message.isVictory == true) {
    setTimeout(() => {
      let message;
      if (context.game.player1) {
        if (context.game.player1 == message.playerId) {
          message = "You win!";
        } else {
          message = "You lose!";
        }
      } else if (context.game.player2) {
        if (context.game.player2 == message.playerId) {
          message = "You win!";
        } else {
          message = "You lose!";
        }
      }
      domSelector.document
        .selectFirstByClass("message-container wait-message")
        .classList.add("display-none");
      const winContainer = domSelector.document.selectFirstByClass(
        "message-container end-game"
      );
      domSelector.selectFirstByClass(winContainer, "payload-title").innerText =
        message;
      winContainer.classList.remove("display-none");
      context.htmlCache.clear();
      context.shipPlacement.clear();
      deleteWsClient();
    }, 1000);
  } else {
    setNextTurn();
  }
};

export default moveMadeCallback;
