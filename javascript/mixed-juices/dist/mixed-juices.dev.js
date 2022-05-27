"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeToMixJuice = timeToMixJuice;
exports.limesToCut = limesToCut;
exports.remainingOrders = remainingOrders;

// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;

    case 'Energizer':
      return 1.5;

    case 'Green Garden':
      return 1.5;

    case 'Tropical Island':
      return 3;

    case 'All or Nothing':
      return 5;

    default:
      return 2.5;
  }
}
/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */


function limesToCut(wedgesNeeded, limes) {
  var limeN = 0;

  for (var i = 0; i < wedgesNeeded; i++) {
    switch (limes[i]) {
      case 'small':
        wedgesNeeded -= 6;
        limeN += 1;
        break;

      case 'medium':
        wedgesNeeded -= 8;
        limeN += 1;
        break;

      case 'large':
        wedgesNeeded -= 10;
        limeN += 1;
        break;
    }
  }

  if (wedgesNeeded <= 6 && wedgesNeeded > 0) {
    limeN += 1;
  }

  return limeN;
}
/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */


function remainingOrders(timeLeft, orders) {
  console.log(timeLeft, orders);
}