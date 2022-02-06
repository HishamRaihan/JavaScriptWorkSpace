'use strict'

const { LinkedList } = require('./linked-list')

const Queue = function () {
  // Add storage for items on the Queue
  // Keep it hidden
  this._items = new LinkedList()
}

// O(1)
Queue.prototype.isEmpty = function () {
  // If our items are empty then the queue is empty
  return this._items.length() === 0
}

// O(1) b/c we have access to the tail all we do is add to it
// O(1) Add an item to the tail (end of the items list)
Queue.prototype.enqueue = function (value) {
  // append will add items to the right side of our linked list (tail)
  this._items.append(value)
  // return this so we can method chain
  // ex. myQueue.enqueue('a').enqueue('b')
  return this
}

// O(1)
Queue.prototype.dequeue = function () {
  // O(1) Remove an item from the head (first of the items list)
  // and return its value
  return this._items.removeFirst()
}

module.exports = Queue
