// sum of every diagnol, column, row is equal to 15
// all sqs equal 45 / 3 = 15 
// combinations of 15 
// since 5 will be the center square 
// 1 sill be and edge 
// 7 sill be and edge 
// 3 sill be and edge 
// 9 sill be and edge 
// corners have to be 2, 4, 6, 8

const minCost = [
  [[8,1,6],[3,5,7], [4,9,2]],
  [[6,1,8],[7,5,3], [2,9,4]],
  [[4,9,2],[3,5,7], [8,1,6]],
  [[2,9,4],[7,5,3], [6,1,8]],
  [[8,3,4],[1,5,9], [6,7,2]],
  [[4,3,8],[9,5,1], [2,7,6]],
  [[6,7,2],[1,5,9], [8,3,4]],
  [[2,7,6],[9,5,1], [4,3,8]]
]