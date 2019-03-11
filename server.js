const { ApolloServer, gql } = require('apollo-server')
const mongoose = require('mongoose')
require('dotenv').config({ path: 'variables.env' })

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('DB connected'))
  .catch(e => console.log(`Error: ${ e }`))

const typeDefs = gql`

  type Todo {
    task: String,
    completed: Boolean
  }

  type Query {
    getTodos: [Todo]
  }

`

const server = new ApolloServer({
  typeDefs
})

server.listen(4000).then(({ url }) => {
  console.log(`Server listens on ${ url }`)
})