'use strict';

module.exports = function hasPrivateFields() {
	try {
		Function('class C { #x; }')(); // eslint-disable-line no-new-func
		return true;
	} catch (e) {
		return false;
	}
};
