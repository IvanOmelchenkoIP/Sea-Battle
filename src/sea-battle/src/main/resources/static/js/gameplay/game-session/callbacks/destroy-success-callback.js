"use strict";

import deleteWsClient from "../../../ws/delete-client.js";

const destroySuccessCallback = (message) => {
    deleteWsClient();
    window.location.replace("http://localhost:8080/menu");
}

export default destroySuccessCallback;
