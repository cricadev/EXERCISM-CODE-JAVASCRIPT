"use strict";

var _freelancerRates = require("./freelancer-rates");

// @ts-check
var DIFFERENCE_PRECISION_IN_DIGITS = 6;
describe('day rate', function () {
  test('at 16/hour', function () {
    var actual = (0, _freelancerRates.dayRate)(16);
    expect(actual).toBe(128);
  });
  test('at 25/hour', function () {
    var actual = (0, _freelancerRates.dayRate)(25);
    expect(actual).toBe(200);
  });
  test('at 31.40/hour', function () {
    var actual = (0, _freelancerRates.dayRate)(31.4);
    expect(actual).toBeCloseTo(251.2, DIFFERENCE_PRECISION_IN_DIGITS);
  });
  test('at 89.89/hour', function () {
    var actual = (0, _freelancerRates.dayRate)(89.89);
    expect(actual).toBeCloseTo(719.12, DIFFERENCE_PRECISION_IN_DIGITS);
  });
  test('at 97.654321/hour', function () {
    var actual = (0, _freelancerRates.dayRate)(97.654321);
    expect(actual).toBeCloseTo(781.234568, DIFFERENCE_PRECISION_IN_DIGITS);
  });
});
describe('days in budget', function () {
  describe('with a budget of 1280', function () {
    test('at 16/hour', function () {
      var actual = (0, _freelancerRates.daysInBudget)(1280, 16);
      var expected = 10;
      expect(actual).toBeCloseTo(expected, DIFFERENCE_PRECISION_IN_DIGITS);
    });
    test('at 25/hour', function () {
      var actual = (0, _freelancerRates.daysInBudget)(1280, 25);
      var expected = 6;
      expect(actual).toBeCloseTo(expected, DIFFERENCE_PRECISION_IN_DIGITS);
    });
    describe('with a budget of 835', function () {
      test('at 12/hour', function () {
        var actual = (0, _freelancerRates.daysInBudget)(835, 12);
        var expected = 8;
        expect(actual).toBeCloseTo(expected, DIFFERENCE_PRECISION_IN_DIGITS);
      });
    });
  });
});
describe('cost with monthly discount', function () {
  describe('at 16/hour', function () {
    test('for 70 days', function () {
      var actual = (0, _freelancerRates.priceWithMonthlyDiscount)(16, 70, 0);
      var expected = 8960;
      expect(actual).toBeCloseTo(expected, DIFFERENCE_PRECISION_IN_DIGITS);
    });
    test('for 130 days with 15% discount', function () {
      var actual = (0, _freelancerRates.priceWithMonthlyDiscount)(16, 130, 0.15);
      var expected = 14528;
      expect(actual).toBeCloseTo(expected, DIFFERENCE_PRECISION_IN_DIGITS);
    });
  });
  describe('at 29.654321/hour', function () {
    test('for 220 days with 11.2%', function () {
      var actual = (0, _freelancerRates.priceWithMonthlyDiscount)(29.654321, 220, 0.112);
      var expected = 46347;
      expect(actual).toBeCloseTo(expected, DIFFERENCE_PRECISION_IN_DIGITS);
    });
    test('for 155 days with 25.47% discount', function () {
      var actual = (0, _freelancerRates.priceWithMonthlyDiscount)(29.654321, 155, 0.2547);
      var expected = 27467;
      expect(actual).toBeCloseTo(expected, DIFFERENCE_PRECISION_IN_DIGITS);
    });
  });
});