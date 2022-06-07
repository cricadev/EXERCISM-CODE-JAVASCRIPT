"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeToMixJuice = timeToMixJuice;
exports.limesToCut = limesToCut;
exports.remainingOrders = remainingOrders;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  var ordersLeft = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = orders.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2),
          i = _step$value[0],
          order = _step$value[1];

      if (timeLeft <= 0 || orders.length === 0) {
        ordersLeft.push(orders.splice(i, orders.length, orders));
        break;
      } else {
        timeLeft -= timeToMixJuice(order);
        orders.splice(i, 1, orders);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return ordersLeft.flat();
}