"use strict";

class CurriedInnerHtmlSetter {
	constructor(domSelector, setterImpl) {
		this._domSelector = domSelector;
		this._setterImpl = setterImpl;
	}
	
	setInnerHtml(element) {
		return (html) => {
			this._setterImpl.setInnerHtml(element, html);
		}
	}
	
	setIdInnerHtml(name) {
		return this.setInnerHtml(this._domSelector.document.selectById(name));
	}
	
	setAllNameInnerHtml(name) {
		return this.setInnerHtml(this._domSelector.document.selectAllByName(name));

	}
	
	setAllTagInnerHtml(name) {
		return this.setInnerHtml(this._domSelector.document.selectAllByTag(name));

	}
	
	setAllClassInnerHtml(name) {
		return this.setInnerHtml(this._domSelector.document.selectAllByClass(name));

	}
	
	setFirstNameInnerHtml(name) {
		return this.setInnerHtml(this._domSelector.document.selectFirstByName(name));
	}
	
	setFirstTagInnerHtml(name) {
		return this.setInnerHtml(this._domSelector.document.selectFirstByTag(name));
	}
	
	setFirstClassInnerHtml(name) {
		return this.setInnerHtml(this._domSelector.document.selectFirstByClass(name));
	}
	
	setLastNameInnerHtml(name) {
		return this.setInnerHtml(this._domSelector.document.selectLastByName(name));
	}
	
	setLastTagInnerHtml(name) {
		return this.setInnerHtml(this._domSelector.document.selectLastByTag(name));
	}
	
	setLastClassInnerHtml(name) {
		return this.setInnerHtml(this._domSelector.document.selectLastByClass(name));
	}
}

export default CurriedInnerHtmlSetter;
