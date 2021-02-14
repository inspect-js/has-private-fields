'use strict';

function hasPrivateFields() {
	try {
		Function('class C { #x; }')(); // eslint-disable-line no-new-func
		return true;
	} catch (e) {
		return false;
	}
}

hasPrivateFields.hasPrivateAccessors = function hasPrivateAccessors() {
	try {
		Function('class C { get #x() {}; }')(); // eslint-disable-line no-new-func
		return true;
	} catch (e) {
		return false;
	}
};

hasPrivateFields.hasPrivateMethods = function hasPrivateMethods() {
	try {
		Function('class C { #x() {}; }')(); // eslint-disable-line no-new-func
		return true;
	} catch (e) {
		return false;
	}
};

module.exports = hasPrivateFields;
