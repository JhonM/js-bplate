'use strict';
/* jshint node: true */

var Multiply = require('./src/multiply');

var jsBplate = function() {
    if (!(this instanceof jsBplate)) {
      return new jsBplate();
    }
};

jsBplate.prototype.total = function(val) {
    var amount = Multiply(val); 
    console.log(amount);
};

jsBplate.prototype.subtract = function(val) {
    return val - 5;
};

module.exports = jsBplate;