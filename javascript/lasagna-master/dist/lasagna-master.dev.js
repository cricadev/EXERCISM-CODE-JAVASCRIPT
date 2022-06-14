"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cookingStatus = cookingStatus;
exports.preparationTime = preparationTime;
exports.quantities = quantities;
exports.addSecretIngredient = addSecretIngredient;
exports.scaleRecipe = scaleRecipe;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
function cookingStatus(timer) {
  if (timer === 0) {
    return 'Lasagna is done.';
  } else if (timer > 0) {
    return 'Not done, please wait.';
  }

  return 'You forgot to set the timer.';
}

function preparationTime(layers) {
  var minPerLayer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return layers.length * minPerLayer;
}

function quantities() {
  var layers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var sauceNeed = 0;
  var noodlesNeed = 0;
  layers.map(function (layer) {
    console.log(layer);

    if (layer === 'sauce') {
      sauceNeed += .2;
    }

    if (layer === 'noodles') {
      noodlesNeed += 50;
    }
  });
  return {
    noodles: noodlesNeed,
    sauce: sauceNeed
  };
}

function addSecretIngredient(friendsList, myList) {
  var secretIngredient = friendsList.slice(friendsList.length - 1);
  myList.push.apply(myList, _toConsumableArray(secretIngredient));
}

function scaleRecipe(recipe, portions) {}