const { Graph } = require('./graph')

const webGraph = new Graph()
webGraph.addNode('stackoverflow.com')
webGraph.addNode('github.com')
webGraph.addNode('google.com')
console.log(webGraph)
webGraph.addEdge('pokedex.com', 'charizard')

console.log(webGraph)
