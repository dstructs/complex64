'use strict';

// MODULES //

var test = require( 'tape' );
var Complex64 = require( './../lib' );


// TESTS //

test( 'main export is a function', function test( t ) {
	t.ok( typeof Complex64 === 'function', 'main export is a function' );
	t.end();
});
