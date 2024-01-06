"use strict";

import wsErrorCallback from "./callbacks/ws-error-callback.js";
import context from "../context/context.js";

const deleteWsClient = () => {
  const client = context.ws.client;
  if (client === null) wsErrorCallback("No connection exists!");
  client.deactivate();
  context.ws.clear();
};

export default deleteWsClient;
