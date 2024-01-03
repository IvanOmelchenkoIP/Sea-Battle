"use strict";

import { WS_BROKER_URL } from "../consts/consts.js";
import { Stomp } from "@stomp/stompjs";

const getStompClient = () => {
	return Stomp.client(WS_BROKER_URL);
}

export default getStompClient;
