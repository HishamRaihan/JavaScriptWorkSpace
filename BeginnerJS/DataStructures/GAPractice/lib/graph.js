'use strict'

// a constructor to build a new graph
// our graphs will look like the following of links on dif web pages
// we use a object and keys on the objects and an array
// {
//   'stackoverflow.com': ['github.com','youtube.com'],
//   'github.com': ['bing.com', 'stackoverflow.com'],
//    this is what a node should look like after initially being added
//    'bing.com':[]
// }
const Graph = function () {
  // keep track of the nodes and the edges that a node is connected to
  // using an object
  this.nodes = {}
}
// node example - bing.com
Graph.prototype.addNode = function (node) {
  // if the object `this.nodes` does not have a property for the `node`
  if (!this.nodes[node]) {
    this.nodes[node] = []
  }
  // add a property for our new node, with an array of the nodes
  // it has a connection to
}

Graph.prototype.addEdge = function (node, edge) {
  if (!this.nodes[node]) {
    this.nodes[node] = [edge]
  } else {
    this.nodes[node].push(edge)
  }
}

module.exports = { Graph }
