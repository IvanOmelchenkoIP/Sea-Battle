"use strict";

import wsMessageCallback from "./callbacks/ws-message-callback.js";
import wsErrorCallback from "./callbacks/ws-error-callback.js";
import context from "../context/context.js";

const connectWsClient = (gameId) => {
  const client = context.ws.client;
  if (client === null) showError(new Error("No connection exists!"));
  client.onConnect = (frame) => {
    client.subscribe("/topic/session/" + gameId, (response) => {
      wsMessageCallback(response);
    });
    client.onWebSocketError((error) => {
      wsErrorCallback(error);
      ws.client = null;
    });
    client.onStompError((frame) => {
      wsErrorCallback(frame.headers["message"]);
      ws.client = null;
    });
  };
  client.activate();
};

export default connectWsClient;
