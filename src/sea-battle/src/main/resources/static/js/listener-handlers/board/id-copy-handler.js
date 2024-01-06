"use strict";

const idCopyHandler = (evt) => {
  evt.preventDefault();
  navigator.clipboard.writeText(evt.target.innerText);
};

export default idCopyHandler;
