"use strict";

class InnerHtmlSetter {
	constructor(domSelector) {
		this._domSelector = domSelector;
	}
	
	setInnerHtml(element, html) {
		element.innerHtml = html;
	}
	
	setIdInnerHtml(name, html) {
		this.setInnerHtml(this._domSelector.document.selectById(name), html);
	}
	
	setAllNameInnerHtml(name, html) {
		this.setInnerHtml(this._domSelector.document.selectAllByName(name), html);

	}
	
	setAllTagInnerHtml(name, html) {
		this.setInnerHtml(this._domSelector.document.selectAllByTag(name), html);

	}
	
	setAllClassInnerHtml(name, html) {
		this.setInnerHtml(this._domSelector.document.selectAllByClass(name), html);

	}
	
	setFirstNameInnerHtml(name, html) {
		this.setInnerHtml(this._domSelector.document.selectFirstByName(name), html);
	}
	
	setFirstTagInnerHtml(name, html) {
		this.setInnerHtml(this._domSelector.document.selectFirstByTag(name), html);
	}
	
	setFirstClassInnerHtml(name, html) {
		this.setInnerHtml(this._domSelector.document.selectFirstByClass(name), html);
	}
	
	setLastNameInnerHtml(name, html) {
		this.setInnerHtml(this._domSelector.document.selectLastByName(name), html);
	}
	
	setLastTagInnerHtml(name, html) {
		this.setInnerHtml(this._domSelector.document.selectLastByTag(name), html);
	}
	
	setLastClassInnerHtml(name, html) {
		this.setInnerHtml(this._domSelector.document.selectLastByClass(name), html);
	}
}

export default InnerHtmlSetter;
