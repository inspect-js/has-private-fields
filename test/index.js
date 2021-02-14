'use strict';

var test = require('tape');
var semver = require('semver');

var hasPrivateFields = require('../');

test('hasPrivateFields', function (t) {
	t.equal(typeof hasPrivateFields, 'function', 'is a function');

	var expected = semver.satisfies(process.version, '>= 12');
	t.equal(hasPrivateFields(), expected, 'module has expected value: ' + expected);

	var expectedAccessors = semver.satisfies(process.version, '>= 14.6');
	t.equal(
		hasPrivateFields.hasPrivateAccessors(),
		expectedAccessors,
		'hasPrivateAccessors has expected value: ' + expectedAccessors
	);

	var expectedMethods = semver.satisfies(process.version, '>= 14.6');
	t.equal(
		hasPrivateFields.hasPrivateMethods(),
		expectedMethods,
		'hasPrivateMethods has expected value: ' + expectedMethods
	);

	t.end();
});
