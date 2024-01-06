"use strict";

import { WS_BROKER_URL } from "../consts/consts.js";
import { Stomp } from "../../node_modules/@stomp/stompjs/esm6/index.js";

const getStompClient = () => {
  return Stomp.client(WS_BROKER_URL);
};

export default getStompClient;
