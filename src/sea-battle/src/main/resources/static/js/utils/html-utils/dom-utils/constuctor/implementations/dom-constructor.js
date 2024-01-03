"use strict";

class DOMConstructor {
	#element;
	
	constructor(tag, innerText = "") {
		this.#element = document.createElement(tag);
		this.#element.innerText = innerText;
	}
	
	setInnerHtml(innerHtml) {
		this.#element.innerHTML = innerHtml;
		return this;
	}
	
	setInnerText(innerText) {
		this.#element.innerText = innerText;
		return this;
	}
	
	addChildren(...children) {
		let innerHtml = "";
		for (const child of children) innerHtml += child.outerHTML;
		return this.setInnerHtml(innerHtml);
	}
	
	addValue(value) {
		this.#element.setAttribute("value", value);
		return this;
	}
	
	addTabindex(tabindex) {
		this.#element.setAttribute("tabindex", tabindex);
		return this;
	}
	
	addRole(role) {
		this.#element.setAttribute("role", role);
		return this;
	}
	
	setContentEditableTrue() {
		this.#element.setAttribute("contenteditable", true);
		return this;
	}
	
	setContentEditableFalse() {
		this.#element.setAttribute("contenteditable", false);
		return this;
	}
	
	setReadonlyTrue() {
		this.#element.setAttribute("readonly", true);
		return this;
	}
	
	setReadonlyFalse() {
		this.#element.setAttribute("readonly", false);
		return this;
	}
	
	addClasses(...classes) {
		this.#element.classList.add(...classes);
		return this;
	}
	
	getElement() {
		return this.#element;
	}
}

export default DOMConstructor;
