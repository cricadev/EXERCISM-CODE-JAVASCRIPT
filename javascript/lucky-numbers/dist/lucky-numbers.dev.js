"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.twoSum = twoSum;
exports.luckyNumber = luckyNumber;
exports.errorMessage = errorMessage;

// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
function twoSum(array1, array2) {
  return Number(array1.join("")) + Number(array2.join(""));
}
/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */


function luckyNumber(value) {
  return String(value).split("").reverse().join("") === String(value);
}
/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */


function errorMessage(input) {
  if (!Boolean(input)) return 'Required field';
  if (!Number(input)) return 'Must be a number besides 0';
  return '';
}