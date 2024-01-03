"use strict";

import ws from "./implementation/ws-context.js";
import game from "./implementation/game-context.js";
import shipPlacementContext from "./implementation/ship-placement-context.js";

const context = {
	shipPlacement: shipPlacementContext,
	ws: ws,
	game: game,	
}

export default context;
