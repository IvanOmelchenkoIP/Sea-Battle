"use strict";

const ws = {
	client: null,
	init: () => {
		ws.client = getStompClient();
	},
	clear: () => {
		ws.client = null;
	}
};

export default ws;
