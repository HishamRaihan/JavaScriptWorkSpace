'use strict'
// import the LinkedList we created previously
const { LinkedList } = require('./linked-list')

// Create a Stack constructor to make new stacks
const Stack = function () {
  // keep track of the items iun our stack using a LinkedList
  // the underscore infront of items, means items is 'private'
  // the end user should not touch the `_items` LinkedList or they might break the stack
  this._items = new LinkedList()
}
// isEmpty - check to see if there are any items on a stack.
Stack.prototype.isEmpty = function () {
// return true, if the number of items is zero in our linked list
  return this._items.length() === 0
}
// push - add an item onto the top of a stack.
Stack.prototype.push = function (value) {
  // add the value to the top of our stack
  // which is the left of our linkedList
  this._items.prepend(value)
  // return the stack to allow method chaining
  // ex. somestack.push('A').push('B')
  this._items.prepend(value)
}
// pop - remove an item from the top of a stack and return it.
Stack.prototype.pop = function () {
  // remove the value from the top of our stack
  // which is the left/first element of the linked list
  return this._items.removeFirst()
}
module.exports = Stack
// push adds to the top of the stack
// pop removes the item from the top of the stack but also returns the value
// is-empty checks to see if there are any items on a stack
