const { LinkedList } = require('./linked-list')

const groceryList = new LinkedList()
// a new Grocery list is LinkedList { head: undefined, tail: undefined }
console.log('a new Grocery list is', groceryList)

groceryList.prepend('Apple')

console.log('A Grocery list w/ an apple is', groceryList)

groceryList.prepend('Pumpkin')

console.log('A Grocery List W/ an apple and pumpkin', groceryList, groceryList.length())

groceryList.removeFirst()

console.log('a grocery list after removing the first element', groceryList)

groceryList.removeFirst()

console.log('a grocery list after removing all the elements', groceryList)

// groceryList.prepend('eggs')
groceryList.prepend('eggs')
groceryList.append('Hashedbrowns')

console.log('grocery list with last as: ', groceryList, groceryList.last())
groceryList.append('Mac & cheese')
console.log(groceryList)
groceryList.append('Orange Juice')
console.log(groceryList)
console.log('print our grocery list')
groceryList.print()
console.log('Is Mac & cheese in the list', groceryList.includes('Mac & cheese'))
console.log('Is Onions in the list', groceryList.includes('Onions'))
groceryList.insertAfter('Orange Juice', 'Carrots')
groceryList.print()
console.log(groceryList)
