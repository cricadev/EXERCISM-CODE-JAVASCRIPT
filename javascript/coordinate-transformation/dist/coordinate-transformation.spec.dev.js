"use strict";

var _coordinateTransformation = require("./coordinate-transformation");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var fakeTransform = function fakeTransform() {
  var first = true;
  return function () {
    if (first) {
      first = false;
      return [1, 1];
    }

    return false;
  };
};

describe('translate2d', function () {
  test('should return a function', function () {
    expect(_typeof((0, _coordinateTransformation.translate2d)(0, 0))).toBe('function');
  });
  var dx = 3;
  var dy = -5;
  var translator = (0, _coordinateTransformation.translate2d)(dx, dy);
  var x1 = 0;
  var y1 = 0;
  var expected = [3, -5];
  test('should be predictable', function () {
    expect(translator(x1, y1)).toEqual(expected);
  });
  var x2 = 4;
  var y2 = 5;
  var reusedExpected = [7, 0];
  test('should be reusable', function () {
    expect(translator(x2, y2)).toEqual(reusedExpected);
  });
});
describe('scale2d', function () {
  test('should return a function', function () {
    expect(_typeof((0, _coordinateTransformation.scale2d)(0, 0))).toBe('function');
  });
  var dx = 4;
  var dy = 2;
  var scaler = (0, _coordinateTransformation.scale2d)(dx, dy);
  var x1 = 1;
  var y1 = 1;
  var expected = [4, 2];
  test('should be predictable', function () {
    expect(scaler(x1, y1)).toEqual(expected);
  });
  var x2 = -2;
  var y2 = 5;
  var reusedExpected = [-8, 10];
  test('should be reusable', function () {
    expect(scaler(x2, y2)).toEqual(reusedExpected);
  });
});
describe('composeTransform', function () {
  var dx = -6;
  var dy = 10;
  var translator = (0, _coordinateTransformation.translate2d)(dx, dy);
  var sx = 3;
  var sy = 2;
  var scaler = (0, _coordinateTransformation.scale2d)(sx, sy);
  test('should return a function', function () {
    expect(_typeof((0, _coordinateTransformation.composeTransform)(translator, scaler))).toBe('function');
  });
  test('should compose two translate functions', function () {
    var composeTranslate = (0, _coordinateTransformation.composeTransform)(translator, translator);
    expect(composeTranslate(0, 0)).toEqual([-12, 20]);
  });
  test('should compose two scale functions', function () {
    var composeScale = (0, _coordinateTransformation.composeTransform)(scaler, scaler);
    expect(composeScale(1, 1)).toEqual([9, 4]);
  });
  test('should compose in the correct order: g(f(x))', function () {
    var composed = (0, _coordinateTransformation.composeTransform)(scaler, translator);
    expect(composed(0, 0)).toEqual([-6, 10]);
  });
  test('should compose in the opposite order: g(f(x))', function () {
    var composed = (0, _coordinateTransformation.composeTransform)(translator, scaler);
    expect(composed(0, 0)).toEqual([-18, 20]);
  });
});
describe('memoizeTransform', function () {
  test('should return a function', function () {
    expect(_typeof((0, _coordinateTransformation.memoizeTransform)((0, _coordinateTransformation.translate2d)(0, 0)))).toBe('function');
  });
  test('should return the same result if given the same input', function () {
    var memoizedTranslate = (0, _coordinateTransformation.memoizeTransform)((0, _coordinateTransformation.translate2d)(2, 2));
    expect(memoizedTranslate(2, 2)).toEqual([4, 4]);
    expect(memoizedTranslate(2, 2)).toEqual([4, 4]);
  });
  test('should return different results for different inputs', function () {
    var memoizedTranslate = (0, _coordinateTransformation.memoizeTransform)((0, _coordinateTransformation.translate2d)(1, 2));
    expect(memoizedTranslate(2, 2)).toEqual([3, 4]);
    expect(memoizedTranslate(6, 6)).toEqual([7, 8]);
  });
  test('should not call the memoized function if the input is the same', function () {
    var memoizedTransform = (0, _coordinateTransformation.memoizeTransform)(fakeTransform());
    expect(memoizedTransform(5, 5)).toEqual([1, 1]);
    expect(memoizedTransform(5, 5)).toEqual([1, 1]);
  });
  test('should only remember the last result', function () {
    var mockFunction = jest.fn(function (x, y) {
      return [x * 2, y * 2];
    });
    var memoizedTransform = (0, _coordinateTransformation.memoizeTransform)(mockFunction);
    expect(memoizedTransform(1, 1)).toEqual([2, 2]);
    expect(memoizedTransform(2, 2)).toEqual([4, 4]);
    expect(memoizedTransform(1, 1)).toEqual([2, 2]);
    expect(mockFunction).toBeCalledTimes(3);
  });
});