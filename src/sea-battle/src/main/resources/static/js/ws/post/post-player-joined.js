"use strict";

import fetchUtil from "../../utils/fetch/fetch-util.js";

const postPlayerJoined = (id) => {
  fetchUtil.post({
    route: "http://localhost:8080/ws/joined",
    data: { gameId: id },
  });
};

export default postPlayerJoined;
