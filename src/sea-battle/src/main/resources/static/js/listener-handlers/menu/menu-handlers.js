"use strict";

import domSelector from "../../utils/html-utils/html-utils.js";
import createOnlineGame from "../../gameplay/send/create-online-game.js";
import joinOnlineGame from "../../gameplay/send/join-online-game.js";

const swapToJoinMenuHandler = () => {
	domSelector.document.selectFirstByClass("main-menu").classList.remove("display-flex");
	domSelector.document.selectFirstByClass("join-menu").classList.add("display-flex");
}

const swapToMainMenuHandler = () => {
	domSelector.document.selectFirstByClass("join-menu").classList.remove("display-flex");
	domSelector.document.selectFirstByClass("main-menu").classList.add("display-flex");
}

const createOnlineGameHandler = () => {
	createOnlineGame();
}

const joinOnlineGameHandler = () => {
	const id = domSelector.document.selectFirstByName("game-id-input").value;
	joinOnlineGame(id);
}

export { createOnlineGameHandler, joinOnlineGameHandler, swapToJoinMenuHandler, swapToMainMenuHandler };
