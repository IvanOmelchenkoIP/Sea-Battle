"use strict";

import domSelector from "../utils/html-utils/html-utils.js";
import context from "../context/context.js";
import changeDirectionHandler from "../listener-handlers/board/change-direction-handler.js";
import placeShipProcessor from "../listener-handlers/board/place-ship-handlers.js";
import cellHoverProcessor from "../listener-handlers/board/cell-hover-handler.js";
import bodyClickHandler from "../listener-handlers/board/body-click-handler.js";
import loadNewProcessor from "../listener-handlers/board/load-new-processor.js";
import idCopyHandler from "../listener-handlers/board/id-copy-handler.js";
import cancelGameHandler from "../listener-handlers/board/cancel-game-handler.js";

(() => {
  context.retrieve();
  if (!context.game.in_progress) {
    loadNewProcessor();
  }
})();

(() => {
  const copyers = domSelector.document.selectAllByClass("id-copyer");
  for (const copyer of copyers) {
    copyer.addEventListener("click", idCopyHandler);
  }
})();

(() => {
  domSelector.document.selectById("cancel-game").addEventListener("click", cancelGameHandler);
})();

(() => {
  domSelector.document
    .selectFirstByClass("board-container")
    .addEventListener("click", bodyClickHandler);
})();

(() => {
  const changeDirectionBtns =
    domSelector.document.selectAllByClass("direction-changer");
  for (const button of changeDirectionBtns) {
    button.addEventListener("click", changeDirectionHandler);
  }
})();

(() => {
  const ships = domSelector.document.selectAllByClass("ship-selector");
  for (const ship of ships) {
    placeShipProcessor(ship);
  }
})();

(() => {
  const cells = domSelector.document.selectAllByClass("cell");
  for (const cell of cells) {
    cellHoverProcessor(cell);
  }
})();
