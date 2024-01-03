"use strict";

import domSelector from "../utils/html-utils/html-utils.js";
import { createOnlineGameHandler, swapToJoinMenuHandler, swapToMainMenuHandler, joinOnlineGameHandler } from "../listener-handlers/menu/menu-handlers.js";

domSelector.document.selectById("new-bot").addEventListener("click", () => {
	console.log("New game with bot");
});

domSelector.document.selectById("new-local").addEventListener("click", () => {
	console.log("New local game");
});

domSelector.document.selectById("new-online").addEventListener("click", () => {
	createOnlineGameHandler();
});

domSelector.document.selectById("join-online").addEventListener("click", () => {
	swapToJoinMenuHandler();
});

domSelector.document.selectById("join-by-id").addEventListener("click", () => {
	joinOnlineGameHandler();
});

domSelector.document.selectById("back-to-menu").addEventListener("click", () => {
	swapToMainMenuHandler();
})