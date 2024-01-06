"use strict";

class HtmlCache {
  constructor() {
    this.cache = {};
  }

  set(key, val) {
    this.cache[key] = val;
  }

  remove(key, val) {
    if (this.cache[key]) delete this.cache[key];
  }

  clear() {
    this.cache = {};
  }
  
  get(key) {
    return this.cache[key];
  }
}

const htmlCache = new HtmlCache();

export default htmlCache;
