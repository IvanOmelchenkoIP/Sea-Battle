"use strict";

class ObjectUtil {
	static deepCopy(obj) {
		return JSON.parse(JSON.stringify(obj));
	}
}

export default ObjectUtil;
