Complex64
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Complex numbers (64-bit).


## Installation

``` bash
$ npm install dstructs-complex64
```


## Usage

``` javascript
var Complex64 = require( 'dstructs-complex64' );
```

#### Complex64( real, imag )

64-bit complex number `constructor`, where `real` and `imag` correspond to the __real__ and __imaginary__ components, respectively.

``` javascript
var z = new Complex64( 3, -2 );
// returns Complex64( 3 - 2i )
```

---
## Properties

A `Complex64` instance has the following properties...

<a name="complex64-real" class="read-only-property"></a>
#### real

A __read-only__ property returning the __real__ component.

``` javascript
var real = z.real;
// returns <number>
```


<a name="complex64-imag" class="read-only-property"></a>
#### imag

A __read-only__ property returning the __imaginary__ component.

``` javascript
var imag = z.imag;
// returns <number>
```


---
## Methods

A `Complex64` instance has the following methods...

### Accessor Methods

These methods do **not** mutate a `Complex64` number and, instead, return some representation.

<a name="complex64-tostring"></a>
#### Complex64.prototype.toString()

Returns a `string` representation of a `Complex64` instance. 

``` javascript
var z = new Complex64( 3, -2 );
var str = z.toString();
// returns '3 - 2i'
```


<a name="complex64-tojson"></a>
#### Complex64.prototype.toJSON()

Returns a [`JSON`][json] representation of a `Complex64` instance. [`JSON#stringify`][json-stringify] implicitly calls this method when stringifying a `Complex64` instance.

``` javascript
var z = new Complex64( 3, -2 );

var json = z.toJSON();
/*
	{
		"type": "Complex64",
		"real": 3,
		"imag": -2
	}
*/
```

To a [revive][json-parse] a `Complex64` number from a [`JSON`][json] string,

``` javascript
// Complex64 reviver:
var reviver = require( 'dstructs-complex64-reviver' );

var z = new Complex64( 3, -2 );

// Stringify a complex number (implicitly calls `.toJSON`):
var str = JSON.stringify( z );
// returns '{"type":"Complex64","real":3,"imag":-2}'

// Revive a Complex64 instance from a JSON string:
var z = JSON.parse( str, reviver );
// returns Complex64( 3 - 2i )
```


---
## Examples

``` javascript
var Complex64 = require( 'dstructs-complex64' );

var z = new Complex64( 3, -2 );

console.log( 'type: %s', typeof z );
// returns 'object'

console.log( 'str: %s', z );
// returns '3 - 2i'

console.log( 'real: %d', z.real );
// returns 3

console.log( 'imag: %d', z.imag );
// returns -2

console.log( 'JSON: %s', JSON.stringify( z ) );
// returns {"type":"Complex64","real":3,"imag":-2}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/dstructs-complex64.svg
[npm-url]: https://npmjs.org/package/dstructs-complex64

[build-image]: http://img.shields.io/travis/dstructs/complex64/master.svg
[build-url]: https://travis-ci.org/dstructs/complex64

[coverage-image]: https://img.shields.io/codecov/c/github/dstructs/complex64/master.svg
[coverage-url]: https://codecov.io/github/dstructs/complex64?branch=master

[dependencies-image]: http://img.shields.io/david/dstructs/complex64.svg
[dependencies-url]: https://david-dm.org/dstructs/complex64

[dev-dependencies-image]: http://img.shields.io/david/dev/dstructs/complex64.svg
[dev-dependencies-url]: https://david-dm.org/dev/dstructs/complex64

[github-issues-image]: http://img.shields.io/github/issues/dstructs/complex64.svg
[github-issues-url]: https://github.com/dstructs/complex64/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io/

[json]: http://www.json.org/
[json-stringify]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
[json-parse]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
