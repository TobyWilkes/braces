'use strict';

var mm = require('minimatch');
var braces = require('..');

/**
 * True
 */

console.log(braces('a/b{1,3}/{x,y,z}', {quantifiers: true}));
//=> [ 'a/b(1|3)/(x|y|z)' ]
console.log(braces('a/b{1,3}/{x,y,z}', {quantifiers: true}));
//=> [ 'a/b{1,3}/(x|y|z)' ]
console.log(braces('a/b{1,3}/{x,y,z}', {quantifiers: true, expand: true}));
//=> [ 'a/b{1,3}/x', 'a/b{1,3}/y', 'a/b{1,3}/z' ]

/**
 * False
 */

console.log(braces('a/b{1,3}/{x,y,z}', {quantifiers: false}));
//=> [ 'a/b(1|3)/(x|y|z)' ]
console.log(braces('a/b{1,3}/{x,y,z}', {quantifiers: false}));
//=> [ 'a/b{1,3}/(x|y|z)' ]
console.log(braces('a/b{1,3}/{x,y,z}', {quantifiers: false, expand: true}));
//=> [ 'a/b{1,3}/x', 'a/b{1,3}/y', 'a/b{1,3}/z' ]
