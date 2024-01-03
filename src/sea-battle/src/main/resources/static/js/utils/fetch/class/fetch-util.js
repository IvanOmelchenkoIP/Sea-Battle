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

  getHtml({ route, successCallback = null, errorCallback = null }) {
    /*fetch(route, {
      method: METHODS.GET,
    })
      .then((html) => {
        if (successCallback) successCallback(html);
      })
      .catch((err) => {
        if (errorCallback) errorCallback(err);
      });*/
    
  }
}

export default FetchUtil;

