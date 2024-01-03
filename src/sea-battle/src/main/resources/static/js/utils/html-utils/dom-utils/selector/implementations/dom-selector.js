"use strict";

import DOM_SELECTORS from "../data/dom-selectors.js";
import ArrayUtil from "../../../../collections/array/array-util.js";

class DOMSelector {
	// return selectors
	
	getIdSelector() {
		return DOM_SELECTORS.id;
	}
	
	getNameSelector() {
		return DOM_SELECTORS.name;
	}
	
	getTagSelector() {
		return DOM_SELECTORS.tag;
	}
	
	getClassSelector() {
		return DOM_SELECTORS.htmlClass;
	}
	
	//select by ...
	
	selectBySelector(element, selector, name) {
		return selector(element, name);
	}
	
	selectById(element, name) {
		return DOM_SELECTORS.id(element, name);
	}
	
	selectAllByName(element, name) {
		return DOM_SELECTORS.name(element, name);
	}
	
	selectAllByTag(element, name) {
		return DOM_SELECTORS.tag(element, name);
	}
	
	selectAllByClass(element, name) {
		return DOM_SELECTORS.htmlClass(element, name);
	}
	
	// ordered select by ... for selectors that return collections (name, tag, class)
	
	selectFirstByName(element, name) { 
		return ArrayUtil.first(this.selectAllByName(element, name));
	}
	
	selectFirstByTag(element, name) {
		return ArrayUtil.first(this.selectAllByTag(element, name));
	}
	
	selectFirstByClass(element, name) {
		return ArrayUtil.first(this.selectAllByClass(element, name));
	}
	
	selectLastByName(element, name) {
		return ArrayUtil.last(this.selectAllByName(element, name));
	}
	
	selectLastByTag(element, name) {
		return ArrayUtil.last(this.selectAllByTag(element, name));
	}
	
	selectLastByClass(element, name) {
		return ArrayUtil.last(this.selectAllByClass(element, name));
	}
}

export default DOMSelector;
