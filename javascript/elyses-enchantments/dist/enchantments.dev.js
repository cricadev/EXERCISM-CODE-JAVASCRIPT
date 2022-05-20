"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItem = getItem;
exports.setItem = setItem;
exports.insertItemAtTop = insertItemAtTop;
exports.removeItem = removeItem;
exports.removeItemFromTop = removeItemFromTop;
exports.insertItemAtBottom = insertItemAtBottom;
exports.removeItemAtBottom = removeItemAtBottom;
exports.checkSizeOfStack = checkSizeOfStack;

// @ts-check
function getItem(cards, position) {
  return cards[position];
}

function setItem(cards, position, replacementCard) {
  cards.splice(position, 1, replacementCard);
  return cards;
}

function insertItemAtTop(cards, newCard) {
  cards.push(newCard);
  return cards;
}

function removeItem(cards, position) {
  cards.splice(position, 1);
  return cards;
}

function removeItemFromTop(cards) {
  cards.pop();
  return cards;
}

function insertItemAtBottom(cards, newCard) {
  cards.unshift(newCard);
  return cards;
}

function removeItemAtBottom(cards) {
  cards.shift();
  return cards;
}

function checkSizeOfStack(cards, stackSize) {
  return cards.length == stackSize;
}

1;