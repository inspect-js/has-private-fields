# has-private-fields <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

Determine if the JS environment has private fields (`class { #x; }`) support.

## Example

```js
const assert = require('assert');
const hasPrivateFields = require('has-private-fields');

assert.equal(hasPrivateFields(), true); // if the environment has native class private fields support (node v12+)

const { hasPrivateAccessors, hasPrivateMethods } = hasPrivateFields;

assert.equal(hasPrivateAccessors(), true); // if the environment has native class private accessors support (node v14.6+)
assert.equal(hasPrivateMethods(), true); // if the environment has native class private methods support (node v14.6+)
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/has-private-fields
[npm-version-svg]: https://versionbadg.es/inspect-js/has-private-fields.svg
[deps-svg]: https://david-dm.org/inspect-js/has-private-fields.svg
[deps-url]: https://david-dm.org/inspect-js/has-private-fields
[dev-deps-svg]: https://david-dm.org/inspect-js/has-private-fields/dev-status.svg
[dev-deps-url]: https://david-dm.org/inspect-js/has-private-fields#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/has-private-fields.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/has-private-fields.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/has-private-fields.svg
[downloads-url]: https://npm-stat.com/charts.html?package=has-private-fields
[codecov-image]: https://codecov.io/gh/inspect-js/has-private-fields/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/has-private-fields/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/inspect-js/has-private-fields
[actions-url]: https://github.com/inspect-js/has-private-fields/actions
