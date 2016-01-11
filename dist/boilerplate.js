(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Boilerplate = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./src/multiply":2}],2:[function(require,module,exports){
'use strict';
/* jshint node: true */

module.exports = function(val) {
    return val * 5;
};
},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiaW5kZXguanMiLCJzcmMvbXVsdGlwbHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG4vKiBqc2hpbnQgbm9kZTogdHJ1ZSAqL1xuXG52YXIgTXVsdGlwbHkgPSByZXF1aXJlKCcuL3NyYy9tdWx0aXBseScpO1xuXG52YXIganNCcGxhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YganNCcGxhdGUpKSB7XG4gICAgICByZXR1cm4gbmV3IGpzQnBsYXRlKCk7XG4gICAgfVxufTtcblxuanNCcGxhdGUucHJvdG90eXBlLnRvdGFsID0gZnVuY3Rpb24odmFsKSB7XG4gICAgdmFyIGFtb3VudCA9IE11bHRpcGx5KHZhbCk7IFxuICAgIGNvbnNvbGUubG9nKGFtb3VudCk7XG59O1xuXG5qc0JwbGF0ZS5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbih2YWwpIHtcbiAgICByZXR1cm4gdmFsIC0gNTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ganNCcGxhdGU7IiwiJ3VzZSBzdHJpY3QnO1xuLyoganNoaW50IG5vZGU6IHRydWUgKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwpIHtcbiAgICByZXR1cm4gdmFsICogNTtcbn07Il19
