"use strict";

import DOMSelector from "./dom-selector.js";
import { fnArgsCurry } from "../../../../fns/curry/curry.js";
import ArrayUtil from "../../../../collections/array/array-util.js";

class DocumentDOMSelector extends DOMSelector {
	
	// return selectors
	
	getIdSelector() {
		return fnArgsCurry(super.getIdSelector())(document);
	}
	
	getNameSelector() {
		return fnArgsCurry(super.getNameSelector())(document);
	}
	
	getTagSelector() {
		return fnArgsCurry(super.getTagSelector())(document);
	}
	
	getClassSelector() {
		return fnArgsCurry(super.getClassSelector())(document);
	}
	
	//select by ...
	
	selectBySelector(selector, name) {
		return selector(name);
	}
	
	selectById(name) {
		return super.selectById(document, name);
	}
	
	selectAllByName(name) {
		return super.selectAllByName(document, name);
	}
	
	selectAllByTag(name) {
		return super.selectAllByTag(document, name);
	}
	
	selectAllByClass(name) {
		return super.selectAllByClass(document, name);
	}
	
	// ordered select by ... for selectors that return collections (name, tag, class)
	
	selectFirstByName(name) { 
		return ArrayUtil.first(super.selectAllByName(document, name));
	}
	
	selectFirstByTag(name) {
		return ArrayUtil.first(super.selectAllByTag(document, name));
	}
	
	selectFirstByClass(name) {
		return ArrayUtil.first(super.selectAllByClass(document, name));
	}
	
	selectLastByName(name) {
		return ArrayUtil.last(super.selectAllByName(document, name));
	}
	
	selectLastByTag(name) {
		return ArrayUtil.last(super.selectAllByTag(document, name));
	}
	
	selectLastByClass(name) {
		return ArrayUtil.last(super.selectAllByClass(document, name));
	}
}

export default DocumentDOMSelector;
