"use strict";

import domSelector from "../../selector/instances/dom-selector-util.js";
import InnerHtmlSetter from "../implementations/html-setter.js";
import ScriptedInnerHtmlSetter from "../implementations/scripted-html-setter.js";
import CurriedInnerHtmlSetter from "../implementations/curried-html-setter.js";

const htmlSetter = new InnerHtmlSetter(domSelector);
htmlSetter.scripted = new ScriptedInnerHtmlSetter(domSelector);
htmlSetter.curried = new CurriedInnerHtmlSetter(domSelector, new InnerHtmlSetter(domSelector));
htmlSetter.curried.scripted = new CurriedInnerHtmlSetter(domSelector, new ScriptedInnerHtmlSetter(domSelector));

export default htmlSetter;
