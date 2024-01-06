"use strict";

import domSelector from "../utils/html-utils/html-utils.js";
import {
  createOnlineGameHandler,
  swapToJoinMenuHandler,
  createBotGameHandler,
  createLocalGameHandler,
  swapToMainMenuHandler,
  joinOnlineGameHandler,
} from "../listener-handlers/menu/menu-handlers.js";

domSelector.document
  .selectById("new-bot")
  .addEventListener("click", createBotGameHandler);

domSelector.document
  .selectById("new-local")
  .addEventListener("click", createLocalGameHandler);

domSelector.document
  .selectById("new-online")
  .addEventListener("click", createOnlineGameHandler);

domSelector.document
  .selectById("join-online")
  .addEventListener("click", swapToJoinMenuHandler);

domSelector.document
  .selectById("join-by-id")
  .addEventListener("click", joinOnlineGameHandler);

domSelector.document
  .selectById("back-to-menu")
  .addEventListener("click", swapToMainMenuHandler);
