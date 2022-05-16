"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dayRate = dayRate;
exports.daysInBudget = daysInBudget;
exports.priceWithMonthlyDiscount = priceWithMonthlyDiscount;
exports.BILLABLE_DAYS = exports.HOURS = void 0;
// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.
// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./freelancer-rates.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Get those rates calculated!
var HOURS = 8;
exports.HOURS = HOURS;
var BILLABLE_DAYS = 22;
/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */

exports.BILLABLE_DAYS = BILLABLE_DAYS;

function dayRate(ratePerHour) {
  return ratePerHour * HOURS;
}
/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */


function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}
/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */


function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  var daysFullPrice = numDays % BILLABLE_DAYS;
  var days = numDays - daysFullPrice;
  var calculateDiscount = dayRate(ratePerHour) * days * discount;
  var priceDiscounted = dayRate(ratePerHour) * days - calculateDiscount;
  var priceFull = Math.ceil(priceDiscounted + daysFullPrice * dayRate(ratePerHour));
  return priceFull;
}