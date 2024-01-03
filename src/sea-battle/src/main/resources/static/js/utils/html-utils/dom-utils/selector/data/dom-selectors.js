"use strict";

const DOM_SELECTORS = {
	id: (element, id) => element.getElementById(id),
	name: (element, name) => element.getElementsByName(name),
	tag: (element, tag) => element.getElementsByTagName(tag),
	htmlClass: (element, htmlClass) => element.getElementsByClassName(htmlClass)
};

export default DOM_SELECTORS;
