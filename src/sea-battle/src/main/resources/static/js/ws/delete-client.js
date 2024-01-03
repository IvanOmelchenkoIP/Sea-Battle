"use strict";

import context from "../context/context.js";

const deleteWsClient = () => {
    const client = context.ws.client;
    if (client === null) showError("No connection exists!");
    client.deactivate();
    ws.clear();
}

export default deleteWsClient;
