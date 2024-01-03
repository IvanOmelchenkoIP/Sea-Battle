"use strict";

const fnArgsCurry = (fn) => (...args1) => (...args2) => fn(...args1, ...args2);

export default fnArgsCurry;
