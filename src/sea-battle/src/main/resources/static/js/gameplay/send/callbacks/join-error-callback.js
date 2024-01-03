"use strict";

import domSelector from "../../../utils/html-utils/html-utils.js"

const joinErrorCallback = (message) => {
	domSelector.document.selectFirstByClass("input-message-err-field").innerText = message;
}

export default joinErrorCallback;
