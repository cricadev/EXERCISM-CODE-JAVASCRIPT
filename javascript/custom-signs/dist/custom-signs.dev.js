"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildSign = buildSign;
exports.buildBirthdaySign = buildBirthdaySign;
exports.graduationFor = graduationFor;
exports.costOf = costOf;

// @ts-check
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Build a sign that includes both of the parameters.
 *
 * @param {string} occasion
 * @param {string} name
 *
 * @returns {string} template string combining both parameters
 */
function buildSign(occasion, name) {
  return "Happy ".concat(occasion, " ").concat(name, "!");
}
/**
 * Build a birthday sign that conditionally formats the return string.
 *
 * @param {number} age
 *
 * @returns {string} template string based on age
 */


function buildBirthdaySign(age) {
  return "".concat(age >= 50 ? "Happy Birthday! What a mature fellow you are." : "Happy Birthday! What a young fellow you are.");
}
/**
 * Build a graduation sign that includes multiple lines.
 *
 * @param {string} name
 * @param {number} year
 *
 * @returns {string} multi-line template string
 */


function graduationFor(name, year) {
  return "Congratulations ".concat(name, "!\nClass of ").concat(year);
}
/**
 * Determine cost based on each character of sign parameter that builds
 * the template string that includes the currency parameter.
 *
 * @param {string} sign
 * @param {string} currency
 *
 * @returns {string} cost to create the sign
 */


function costOf(sign, currency) {
  return "Your sign costs ".concat(20 + sign.length * 2, ".00 ").concat(currency, ".");
}