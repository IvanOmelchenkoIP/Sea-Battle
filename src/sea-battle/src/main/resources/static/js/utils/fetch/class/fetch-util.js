"use strict";

const METHODS = {
  POST: "POST",
  GET: "GET",
  DELETE: "DELETE",
};

class FetchUtil {
  post({ route, data = {}, successCallback = null, errorCallback = null }) {
    fetch(route, {
      method: METHODS.POST,
      cors: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(
        (response) =>
          new Promise((resolve) =>
            response.json().then((json) => resolve({ ok: response.ok, json }))
          )
      )
      .then(({ ok, json }) => {
        const message = json.message;
        if (ok) {
          if (successCallback) successCallback(message);
        } else {
          if (errorCallback) errorCallback(message);
        }
      });
  }

  delete({ route, data = {}, successCallback = null, errorCallback = null }) {
    fetch(route, {
      method: METHODS.DELETE,
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then(
        (response) =>
          new Promise((resolve) =>
            response.json().then((json) => resolve({ ok: response.ok, json }))
          )
      )
      .then(({ ok, json }) => {
        const message = json.message;
        if (ok) {
          if (successCallback) successCallback(message);
        } else {
          if (errorCallback) errorCallback(message);
        }
      });
  }
}

export default FetchUtil;
