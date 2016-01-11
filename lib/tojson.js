'use strict';

/**
* FUNCTION: toJSON()
*	Serializes a complex number to JSON.
*
* @returns {Object} JSON representation
*/
function toJSON() {
	/* jshint validthis: true */
	var out = {};
	out.type = 'Complex64';
	out.real = this.real;
	out.imag = this.imag;
	return out;
} // end FUNCTION toJSON()


// EXPORTS //

module.exports = toJSON;
