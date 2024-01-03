"use strict";

import DOMConstructor from "./dom-constructor.js";

class DOMConstructorUtil {
	newDOMElement(tag, innerText = "") {
		return new DOMConstructor(tag, innerText);
	}
	
	newDiv(innerText = "") {
		return this.newDOMElement("div", innerText);
	}
	
	newP(innerText = "") {
		return this.newDOMElement("p", innerText);
	}
	
	newInput(innerText = "") {
		return this.newDOMElement("input", innerText);
	}
	
	newButton(innerText = "") {
		return this.newDOMElement("button", innerText);
	}
	
	newSpan(innerText = "") {
		return this.newDOMElement("span", innerText);
	}
}

export default DOMConstructorUtil;
