const { ApolloServer, gql } = require('apollo-server')

const todos = [
  { task: 'uno', completed: false },
  { task: 'dos', completed: true }
]

const typeDefs = gql`

type Query {
  task: String,
  completed: Boolean
}

`

const server = new ApolloServer({
  typeDefs
})

server.listen().then(({url}) => {
  console.log(`Server listens on ${url}`)
})