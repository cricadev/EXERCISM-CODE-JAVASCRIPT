"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.frontDoorResponse = frontDoorResponse;
exports.frontDoorPassword = frontDoorPassword;
exports.backDoorResponse = backDoorResponse;
exports.backDoorPassword = backDoorPassword;
exports.firstLetters = void 0;
// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.
//
// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./door-policy.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Good luck with that door policy!
var firstLetters;
/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */

exports.firstLetters = firstLetters;

function frontDoorResponse(line) {
  return Array.from(line).shift();
}
/**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */


function frontDoorPassword(word) {
  exports.firstLetters = firstLetters = Array.from(word);
  console.log(firstLetters);

  for (var i = 1; i < firstLetters.length; i++) {
    exports.firstLetters = firstLetters = firstLetters[i].toLowerCase();
    console.log(firstLetters);
  }

  console.log(firstLetters);
}
/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} line
 * @returns {string}
 */


function backDoorResponse(line) {
  throw new Error('Remove this line and implement the function');
}
/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */


function backDoorPassword(word) {
  throw new Error('Remove this line and implement the function');
}

frontDoorPassword('SUMMER');