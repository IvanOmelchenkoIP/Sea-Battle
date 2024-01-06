"use strict";

import getStompClient from "../../ws/get-client.js";

const ws = {
  client: null,
  init: () => {
    ws.client = getStompClient();
  },
  clear: () => {
    ws.client = null;
  },
};

export default ws;
