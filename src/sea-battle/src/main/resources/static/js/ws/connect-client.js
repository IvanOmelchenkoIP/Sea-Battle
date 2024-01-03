"use strict";

import showServerResponse from "../gameplay/receive/show-server-response.js";
import showError from "../gameplay/receive/show-error.js";
import context from "../context/context.js";

const connectWsClient = (gameId) => {
    const client = context.ws.client;
    if (client === null) showError(new Error("No connection exists!"));
    client.connect({}, (frame) => {
        client.subscribe("/topic/session" + gameId, (response) => {
            showServerResponse(response);
        });
        client.onWebSocketError((error) => {
            showError(error);
            ws.client = null;
        });
        client.onStompClient((frame) => {
            showError(frame.headers["message"]);
            ws.client = null;
        });
    })
}

export default connectWsClient;
