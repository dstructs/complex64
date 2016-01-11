'use strict';

/**
* FUNCTION: toString()
*	Serializes a complex number to a string.
*
* @returns {String} serialized complex number
*/
function toString() {
	/* jshint validthis: true */
	var str = '' + this.real;
	if ( this.imag < 0 ) {
		str += ' - ' + (-this.imag);
	} else {
		str += ' + ' + this.imag;
	}
	str += 'i';
	return str;
} // end FUNCTION toString()


// EXPORTS //

module.exports = toString;
