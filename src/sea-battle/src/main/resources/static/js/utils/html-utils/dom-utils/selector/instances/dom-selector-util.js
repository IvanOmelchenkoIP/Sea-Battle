"use strict";

import DOMSelector from "../implementations/dom-selector.js";
import DocumentDOMSelector from "../implementations/document-dom-selector.js";

const domSelector = new DOMSelector();
domSelector.document = new DocumentDOMSelector();

export default domSelector;
