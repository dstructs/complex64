'use strict';

var Complex64 = require( './../lib' );

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
