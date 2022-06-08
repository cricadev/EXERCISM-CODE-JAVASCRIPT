"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createScoreBoard = createScoreBoard;
exports.addPlayer = addPlayer;
exports.removePlayer = removePlayer;
exports.updateScore = updateScore;
exports.applyMondayBonus = applyMondayBonus;
exports.normalizeScore = normalizeScore;

/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new score board with an initial entry.
 *
 * @returns {Record<string, number>} new score board
 */
function createScoreBoard() {
  var highScore = {
    'The Best Ever': 1000000
  };
  return highScore;
}
/**
 * Adds a player to a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Record<string, number>} updated score board
 */


function addPlayer(scoreBoard, player, score) {
  scoreBoard["".concat(player)] = score;
  return scoreBoard;
}
/**
 * Removes a player from a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @returns {Record<string, number>} updated score board
 */


function removePlayer(scoreBoard, player) {
  delete scoreBoard["".concat(player)];
  return scoreBoard;
}
/**
 * Increases a player's score by the given amount.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Record<string, number>} updated score board
 */


function updateScore(scoreBoard, player, points) {
  scoreBoard["".concat(player)] += points;
  return scoreBoard;
}
/**
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Record<string, number>} scoreBoard
 * @returns {Record<string, number>} updated score board
 */


function applyMondayBonus(scoreBoard) {
  for (var score in scoreBoard) {
    scoreBoard[score] += 100;
  }

  return scoreBoard;
}
/**
 * Normalizes a score with the provided normalization function.
 *
 * @param {Params} params the parameters for performing the normalization
 * @returns {number} normalized score
 */


function normalizeScore(params) {
  return params.normalizeFunction(params.score);
}