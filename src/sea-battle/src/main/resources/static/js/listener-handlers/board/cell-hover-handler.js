"use strict";

import context from "../../context/context.js";
import readyShipsProcessor from "../../gameplay/ships/ready-ships-processor.js";
import domSelector from "../../utils/html-utils/html-utils.js";

const cellHoverProcessor = (cell) => {
  const board = cell.parentElement;

  const enterHoverHandler = (evt) => {
    evt.preventDefault();
    if (board.classList[2] == "locked") return;

    const highlightCoordsCells = (coords) => {
      const cells = [];
      for (const coord of coords) {
        const x = coord[0];
        const y = coord[1];
        const classY = "y-" + y;
        const classX = "x-" + x;
        const cell = domSelector.selectFirstByClass(
          board,
          classY + " " + classX
        );
        if (!cell) return false;
        if (cell.classList.length > 3) return false;
        cells.push(cell);
      }
      for (const cell of cells) cell.classList.add("highlighted");
      return true;
    };

    const getDraggedShipCoords = (shipContext) => {
      const y = Number(cell.classList[1].split("-")[1]);
      const x = Number(cell.classList[2].split("-")[1]);
      const length = shipContext.shipParams.length;
      let coords = [];
      let counter = 0;
      const SHIP_COORDS_SETTER = {
        VERTICAL: () => {
          while (counter < length) {
            const newY = y - counter;
            if (newY < 0 || newY > context.game.BOARD_SIZE) {
              coords = [];
              return;
            }
            coords.push([x, newY]);
            counter += 1;
          }
        },
        HORIZONTAL: () => {
          while (counter < length) {
            const newX = x + counter;
            if (newX < 0 && nexX > context.game.BOARD_SIZE) {
              coords = [];
              return;
            }
            coords.push([newX, y]);
            counter += 1;
          }
        },
      };
      if (length == 1) {
        coords.push([x, y]);
        return coords;
      }
      if (shipContext.direction == shipContext.DIRECTIONS.VERTICAL) {
        SHIP_COORDS_SETTER.VERTICAL();
      } else {
        SHIP_COORDS_SETTER.HORIZONTAL();
      }
      return coords;
    };

    const shipContext = context.shipPlacement.context;
    if (shipContext.shipParams.isSelected) {
      const coords = getDraggedShipCoords(shipContext);
      const highlighted = highlightCoordsCells(coords);
      if (!highlighted) shipContext.shipParams.coords = [];
      else shipContext.shipParams.coords = coords;
    }
  };

  const leaveHoverHandler = (evt) => {
    evt.preventDefault();
    if (board.classList[2] == "locked") return;

    const dehighlightCells = (coords) => {
      for (const coord of coords) {
        const x = coord[0];
        const y = coord[1];
        const classY = "y-" + y;
        const classX = "x-" + x;
        domSelector
          .selectFirstByClass(board, classY + " " + classX)
          .classList.remove("highlighted");
      }
    };

    const shipContext = context.shipPlacement.context;
    if (shipContext.shipParams.isSelected) {
      const coords = shipContext.shipParams.coords;
      dehighlightCells(coords);
    }
  };

  const clickHandler = (evt) => {
    if (board.classList[2] == "locked") return;

    const applyBlock = (coords) => {
      const x = coords[0];
      const y = coords[1];
      const xViolated = x < 0 && x > context.game.BOARD_SIZE - 1;
      const yViolated = y < 0 && y > context.game.BOARD_SIZE - 1;
      if (xViolated || yViolated) return;

      const classY = "y-" + y;
      const classX = "x-" + x;
      const cell = domSelector.selectFirstByClass(board, classY + " " + classX);
      if (!cell) return;
      if (cell.classList.length < 4) cell.classList.add("blocked");
    };

    const handleShipPlacementClick = (shipContext) => {
      const ship = shipContext.shipParams.ship;
      const coords = shipContext.shipParams.coords;
      ship.classList.remove("selected");
      if (coords.length) {
        for (const coord of coords) {
          applyBlock([coord[0] - 1, coord[1] - 1]);
          applyBlock([coord[0], coord[1] - 1]);
          applyBlock([coord[0] + 1, coord[1] - 1]);
          applyBlock([coord[0] - 1, coord[1]]);
          applyBlock([coord[0] + 1, coord[1]]);
          applyBlock([coord[0] - 1, coord[1] + 1]);
          applyBlock([coord[0], coord[1] + 1]);
          applyBlock([coord[0] + 1, coord[1] + 1]);
          const classY = "y-" + coord[1];
          const classX = "x-" + coord[0];
          const cell = domSelector.selectFirstByClass(
            board,
            classY + " " + classX
          );
          cell.classList.remove("blocked");
          cell.classList.add("ship");
        }
        shipContext.addShipCoords(coords);
        const length = shipContext.shipParams.length;
        shipContext.left[length] -= 1;
        const left = shipContext.left[length];
        const shipWrapper = ship.parentElement;
        domSelector.selectFirstByTag(shipWrapper, "span").innerText = left;
        if (shipContext.left[length] == 0) ship.classList.add("blocked");
        readyShipsProcessor();
      }
      shipContext.shipParams.ship = null;
      shipContext.shipParams.isSelected = false;
      shipContext.shipParams.length = null;
      shipContext.coords = [];
    };

    const shipContext = context.shipPlacement.context;
    if (shipContext.shipParams.isSelected) {
      handleShipPlacementClick(shipContext);
    }
  };

  cell.addEventListener("mouseenter", enterHoverHandler);
  cell.addEventListener("mouseout", leaveHoverHandler);
  cell.addEventListener("click", clickHandler);
};

export default cellHoverProcessor;
