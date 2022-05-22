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
    console.log(number += birdsPerDay[i]);
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
  throw new Error('Please implement the birdsInWeek function');
}
/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */


function fixBirdCountLog(birdsPerDay) {
  throw new Error('Please implement the fixBirdCountLog function');
}