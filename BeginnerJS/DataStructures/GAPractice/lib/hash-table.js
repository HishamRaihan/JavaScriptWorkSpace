'use strict'
// this constructor allows us to make a new HashTable(object)
// size - is how many buckets to create
const HashTable = function (size) {
  // create an array of buckets
  this.buckets = []
  // loop once for each bucket we want to make
  for (let i = 0; i < size; i++) {
    // and for each bucket push an empty array
    this.buckets.push([])
  }
}
// evenly distrubuted will be O(1)
HashTable.prototype.insert = function (key, value) {
// which bucket we want to insert our element into
// use the hash function to find out which bucket to put our key/value pair in
  const bucketIndex = this._hash(key)
  // get the bucket to insert our key/value pair in
  const bucket = this.buckets[bucketIndex]

  // search for a key/value pair object with the same key we are trying to insert
  const foundPair = bucket.find(pair => pair.key === key)
  // if we found a key/value pair
  if (foundPair) {
    // we want to update its value
    foundPair.value = value
  } else {
    // otherwise,
    // make an object to store our key and our value
    const madePair = { key, value }
    // push in the new key/value pair
    bucket.push(madePair)
  }
}
// O(1)
HashTable.prototype.search = function (key) {
  // same lines from insert
  const bucketIndex = this._hash(key)
  // get the bucket to insert our key/value pair in
  const bucket = this.buckets[bucketIndex]
  const foundPair = bucket.find(pair => pair.key === key)
  // if we found a key/value pair
  if (foundPair) {
    // return the value.
    return foundPair.value
  }

  // otherwise, return undefined
  return undefined
}

HashTable.prototype.delete = function (key) {

}

// _hash - a helper function, that hashes the given key, returning the index of
//         the bucket we should place the key in
HashTable.prototype._hash = function (key) {
  // create a number based on our key, here we assume the key will always be
  // a string
  let sum = 0

  // for each character in our key
  for (let i = 0; i < key.length; i++) {
    // add the character's Unicode value to our sum
    sum += key.charCodeAt(i)
  }

  // modulo our number by the number of buckets, so we can know which bucket
  // this key corresponds to
  return sum % this.buckets.length
}

module.exports = {
  HashTable
}
