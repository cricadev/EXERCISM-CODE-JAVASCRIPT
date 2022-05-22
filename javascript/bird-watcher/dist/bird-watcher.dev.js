"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.totalBirdCount = totalBirdCount;
exports.birdsInWeek = birdsInWeek;
exports.fixBirdCountLog = fixBirdCountLog;

// @ts-check

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
function totalBirdCount(birdsPerDay) {
  var number = 0;

  for (var i = 0; i < birdsPerDay.length; i++) {
    number += birdsPerDay[i];
  }

  return number;
}
/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */


function birdsInWeek(birdsPerDay, week) {
  if (week >= 2) {
    var initialWeek = week * 7 - 7;
    week = week * 7;
    var birdsWeek = birdsPerDay.slice(initialWeek, week);
    var number = 0;

    for (var i = 0; i < birdsWeek.length; i++) {
      number += birdsWeek[i];
    }

    return number;
  } else {
    week = 1;
    var _number = 0;

    for (var _i = 0; _i < 7; _i++) {
      _number += birdsPerDay[_i];
    }

    return _number;
  }
}
/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */


function fixBirdCountLog(birdsPerDay) {
  for (var i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] += 1;
  }

  return birdsPerDay;
}