"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.needsLicense = needsLicense;
exports.chooseVehicle = chooseVehicle;
exports.calculateResellPrice = calculateResellPrice;

// @ts-check
function needsLicense(kind) {
  return kind === 'car' || kind === 'truck';
}

function chooseVehicle(option1, option2) {
  return option1 < option2 ? "".concat(option1, " is clearly the better choice.") : "".concat(option2, " is clearly the better choice.");
}

function calculateResellPrice(originalPrice, age) {
  if (age < 3) {
    return originalPrice = originalPrice * .80;
  } else if (age > 10) {
    return originalPrice = originalPrice * .50;
  } else {
    return originalPrice = originalPrice * .70;
  }
}