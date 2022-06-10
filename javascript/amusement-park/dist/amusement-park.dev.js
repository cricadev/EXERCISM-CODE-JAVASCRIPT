"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createVisitor = createVisitor;
exports.revokeTicket = revokeTicket;
exports.ticketStatus = ticketStatus;
exports.simpleTicketStatus = simpleTicketStatus;
exports.gtcVersion = gtcVersion;

/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
function createVisitor(name, age, ticketId) {
  return {
    name: name,
    age: age,
    ticketId: ticketId
  };
}
/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */


function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}
/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */


function ticketStatus(tickets, ticketId) {
  for (var ticket in tickets) {
    if (ticket === ticketId && tickets[ticket] !== null) {
      return "sold to ".concat(tickets[ticket]);
    } else if (ticket === ticketId && tickets[ticket] === null) {
      return 'not sold';
    }

    return 'unknown ticked id';
  }
}
/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */


function simpleTicketStatus(tickets, ticketId) {
  throw new Error('Please implement the simpleTicketStatus function.');
}
/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */


function gtcVersion(visitor) {
  throw new Error('Please implement the gtcVersion function.');
}