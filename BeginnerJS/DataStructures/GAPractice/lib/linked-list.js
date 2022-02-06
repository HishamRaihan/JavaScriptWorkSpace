'use strict'
// this constructor  will allow us to create more linkedLists
const LinkedList = function () {
  // the head is the first node in our linked list
  this.head = undefined
  // the tail is the last node in our linked list
  this.tail = undefined
  // making a LinkedList object with 2 nested objects a head and a tail

  // keep track of the number of nodes in the LinkedList
  // (similar to the `length` property of an array)
  this.nodeCount = 0
}
// the same using class syntax
// class LinkedList{
//   constructor(){
//     this.head = undefined
//     this.tail = undefined
//   }
// }

// the Node constructor allows us to add a new  `value` to our LinkedList
const Node = function (value, next) {
  // the value is the data the node holds
  this.value = value
  // this is property refers to the next node in the LinkedList (or undefined if this is the last node)
  this.next = next
}
// using prepend for the head
// Big O is O(1) constant time -> making a node and updating a property
LinkedList.prototype.prepend = function (value) {
  // 1. create a new Node containing the given value
  // 2. Set the new Node's next node to the head.
  const createdNode = new Node(value, this.head)

  // we could accomplish step2, by modifying the next property
  // createdNode.next = this.head

  // 3. Update head to be the new Node
  this.head = createdNode

  // if we dont have a tail yet, which means the list is empty
  if (!this.tail) {
    // if (this.tail === undefined) {
    // set the tail, to the only node we just inserted into the linked list
    this.tail = createdNode
  }
  // increase the number of nodes
  this.nodeCount++
}

// Big O is O(1) constant time
LinkedList.prototype.removeFirst = function () {
  // if our list is empty
  if (!this.head) {
    return undefined
  }
  // decrease the nodeCount since we removed a node
  this.nodeCount--
  // if we only have one node(the tail is the same as the head)
  // check to see if theres only a single element in the LinkedList
  if (this.tail === this.head) {
    // reset the tail to be undefined
    this.tail = undefined
  }
  // Keep track of the first value in the linked list, to return later
  const firstValue = this.head.value

  // remove the first node in the linked list
  // by setting the head (first node) to the second node (this.head.next)
  this.head = this.head.next

  // return the value of the first node
  return firstValue
}
// Big O O(1) constant time -> accessing a  property
LinkedList.prototype.length = function () {
  // if head is not undifined then +1 if next is not undefined +1 is tail is not undefined +1
  // simply return the nodeCount property
  return this.nodeCount
}
// Big O O(1) constant time -> get access instantly
LinkedList.prototype.last = function () {
  if (this.length() === 0) {
  // if (!this.tail) {
    return undefined
  }
  // return the value of the last element in the linked list
  return this.tail.value
}
// Big O O(1) constant time
LinkedList.prototype.append = function (value) {
  // default value is undefined so we can leave it out
  const createdNode = new Node(value, undefined)
  // 1. if we have a tail node
  if (this.tail) {
    // 2. updated the tails next node to be the node we are appending
    this.tail.next = createdNode
  }
  // 3. update the tail node to be the node we appended
  this.tail = createdNode
  // if we dont have a head then we set the head to be the node were making/appending
  if (!this.head) {
    this.head = createdNode
  }
  // increase the number of nodes
  this.nodeCount++
}
// Big O O(n) linear -> need to loop through all the elements
LinkedList.prototype.print = function (value) {
// 1. Create a variable, currentNode, and assign it to the first node(the head) in the LinkedList
  let currentNode = this.head
  // 2. While currentNode is not undefined
  while (currentNode) {
    // while (currentNode !== undefined)
    // print the value of the node
    console.log(currentNode.value)
    // 3. Set currentNode to its next node.Advancing currentNode to the next node in the LinkedList
    currentNode = currentNode.next
  }
}
// Big O O(n) Linear -> loop through all the elements
LinkedList.prototype.includes = function (value) {
  // 1. make a variable called currentNode
  let currentNode = this.head

  // 2. while we have a currentNode
  while (currentNode) {
    // logic check if this is the value we are searching for
    // if we found the value we're searching for return true
    if (currentNode.value === value) {
      return true
    }
    // 3. set currentNode to its next node
    currentNode = currentNode.next
  }
  // return false if we didnt find the value we're searching for
  return false
}
// Big O O(n) Linear -> loop through all the elements worst case would be insertAfter tail
LinkedList.prototype.insertAfter = function (target, value) {
  // 1. create a variable called currentNode
  let currentNode = this.head
  // 2. while currentNode is not undefinedd
  while (currentNode) {
    if (currentNode.value === target) {
      // make a new node with the value we're searching for
      const nextNode = new Node(value, currentNode.next)
      // setting the target node's next property, to the node we just created
      currentNode.next = nextNode
      // if we're inserting after the tail(the last node)
      if (currentNode === this.tail) {
        // update the tail, to be the createdNode
        this.tail = nextNode
      }
      // increase the count for the number of nodes
      this.nodeCount++
      // only insert one value, return to end the function
      return 'Node insterded'
    }
    currentNode = currentNode.next
  }
}

LinkedList.prototype.toString = function () {

}

LinkedList.prototype._search = function (value) {

}

LinkedList.prototype.remove = function (value) {

}

module.exports = {
  LinkedList,
  Node
}
