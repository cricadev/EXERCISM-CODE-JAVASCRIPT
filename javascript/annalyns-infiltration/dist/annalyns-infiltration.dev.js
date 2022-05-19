"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canExecuteFastAttack = canExecuteFastAttack;
exports.canSpy = canSpy;
exports.canSignalPrisoner = canSignalPrisoner;
exports.canFreePrisoner = canFreePrisoner;

// @ts-check
function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return !archerIsAwake && prisonerIsAwake;
}

function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) {
  return petDogIsPresent && !archerIsAwake || !petDogIsPresent && !archerIsAwake && !knightIsAwake && prisonerIsAwake;
}