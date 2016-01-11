'use strict';

// MODULES //

var Complex64 = require( './complex64.js' );


// CREATE //

/**
* FUNCTION: create( real, imag )
*	Returns a 64-bit complex number.
*
* @param {Number} real - real component
* @param {Number} imag - imaginary component
* @returns {Complex64} 64-bit complex number
*/
function create( real, imag ) {
	return new Complex64({
		'real': real,
		'imag': imag
	});
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
