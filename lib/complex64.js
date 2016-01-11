'use strict';

// MODULES //

var structs = require( 'typed-objects' );


// COMPLEX64 //

var Complex64 = new structs.StructType({
	'real': structs.float32,
	'imag': structs.float32
});

Complex64.prototype.toString = require( './tostring.js' );
Complex64.prototype.toJSON = require( './tojson.js' );


// EXPORTS //

module.exports = Complex64;
