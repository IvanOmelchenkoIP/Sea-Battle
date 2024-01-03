"use strict";

const wrapperCurry = (wrapper) => (fn) => (...args) => wrapper(fn(...args));

export default wrapperCurry;
