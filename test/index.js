'use strict';

var test = require('tape');
var semver = require('semver');

var hasPrivateFields = require('../');

test('hasPrivateFields', function (t) {
	t.equal(typeof hasPrivateFields, 'function', 'is a function');

	var expected = semver.satisfies(process.version, '>= 12');
	t.equal(hasPrivateFields(), expected, 'module has expected value: ' + expected);

	t.end();
});
