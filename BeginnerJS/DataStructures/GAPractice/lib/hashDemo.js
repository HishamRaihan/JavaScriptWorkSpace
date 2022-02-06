const { HashTable } = require('./hash-table')

const carHashTable = new HashTable(5)
// null and 2 spaces of indentation
console.log('the new car hash table is', JSON.stringify(carHashTable, null, 2))

carHashTable.insert('make', 'Ford')
carHashTable.insert('milage', 6832)
carHashTable.insert('year', 2021)
carHashTable.insert('model', 'Bronco')
carHashTable.insert('engine', 'Automatic')
console.log('the new car hash table w/ properties', JSON.stringify(carHashTable, null, 2))
carHashTable.insert('year', 2022)
carHashTable.insert('model', 'Bronco Sport')
console.log('the new car hash table w/ updated properties', JSON.stringify(carHashTable, null, 2))

HashTable.prototype.search = function (key) {
  // get the bucket that corresponds to the key
  const bucket = this.getBucket(key)

  // look for a key/value pair in the bucket. We can do this by looking for
  // a pair with the same key
  const pair = bucket.find(pair => pair.key === key)

  // if a pair exists,
  if (pair) {
    // return the value.
    return pair.value
  }

  // otherwise, return undefined
  return undefined
}
