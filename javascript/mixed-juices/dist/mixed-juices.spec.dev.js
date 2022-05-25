"use strict";

var _mixedJuices = require("./mixed-juices");

describe('timeToMixJuice', function () {
  test("returns the correct time for 'Pure Strawberry Joy'", function () {
    expect((0, _mixedJuices.timeToMixJuice)('Pure Strawberry Joy')).toBe(0.5);
  });
  test('returns the correct times for all other standard menu items', function () {
    expect((0, _mixedJuices.timeToMixJuice)('Energizer')).toBe(1.5);
    expect((0, _mixedJuices.timeToMixJuice)('Green Garden')).toBe(1.5);
    expect((0, _mixedJuices.timeToMixJuice)('Tropical Island')).toBe(3);
    expect((0, _mixedJuices.timeToMixJuice)('All or Nothing')).toBe(5);
  });
  test('returns the same time for all other juices', function () {
    var defaultTime = 2.5;
    expect((0, _mixedJuices.timeToMixJuice)('Limetime')).toBe(defaultTime);
    expect((0, _mixedJuices.timeToMixJuice)('Manic Organic')).toBe(defaultTime);
    expect((0, _mixedJuices.timeToMixJuice)('Papaya & Peach')).toBe(defaultTime);
  });
});
describe('limesToCut', function () {
  test('calculates the number of limes needed to reach the target supply', function () {
    var limes = ['small', 'large', 'large', 'medium', 'small', 'large', 'large', 'medium'];
    expect((0, _mixedJuices.limesToCut)(42, limes)).toBe(6);
    expect((0, _mixedJuices.limesToCut)(4, ['medium', 'small'])).toBe(1);
  });
  test('uses up all limes if there are not enough to reach the target', function () {
    var limes = ['small', 'large', 'large', 'medium', 'small', 'large', 'large'];
    expect((0, _mixedJuices.limesToCut)(80, limes)).toBe(7);
  });
  test('if no new wedges are needed, no limes are cut', function () {
    expect((0, _mixedJuices.limesToCut)(0, ['small', 'large', 'medium'])).toBe(0);
  });
  test('works if no limes are available', function () {
    expect((0, _mixedJuices.limesToCut)(10, [])).toBe(0);
  });
});
describe('remainingOrders', function () {
  test('correctly determines the remaining orders', function () {
    var orders = ['Tropical Island', 'Energizer', 'Limetime', 'All or Nothing', 'Pure Strawberry Joy'];
    var expected = ['All or Nothing', 'Pure Strawberry Joy'];
    expect((0, _mixedJuices.remainingOrders)(7, orders)).toEqual(expected);
  });
  test('correctly handles orders that were started because there was time left', function () {
    var orders = ['Pure Strawberry Joy', 'Pure Strawberry Joy', 'Vitality', 'Tropical Island', 'All or Nothing', 'All or Nothing', 'All or Nothing', 'Green Garden', 'Limetime'];
    var expected = ['All or Nothing', 'Green Garden', 'Limetime'];
    expect((0, _mixedJuices.remainingOrders)(13, orders)).toEqual(expected);
  });
  test('counts all orders as fulfilled if there is enough time', function () {
    var orders = ['Energizer', 'Green Garden', 'Ruby Glow', 'Pure Strawberry Joy', 'Tropical Island', 'Limetime'];
    expect((0, _mixedJuices.remainingOrders)(12, orders)).toEqual([]);
  });
  test('works if there is only very little time left', function () {
    var orders = ['Bananas Gone Wild', 'Pure Strawberry Joy'];
    var expected = ['Pure Strawberry Joy'];
    expect((0, _mixedJuices.remainingOrders)(0.2, orders)).toEqual(expected);
  });
});