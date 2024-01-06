"use strict";

import context from "../../context/context.js";

const readyShipsProcessor = () => {
    const leftObj = context.shipPlacement.context.left;
    for (const inst of leftObj) {
        if (inst > 0) return;
    }
}

export default readyShipsProcessor;
