const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')

require('dotenv').config({ path: 'variables.env' })

const filePath = path.join(__dirname, 'typeDefs.gql')
const typeDefs = fs.readFileSync(filePath, 'utf-8')

const User = require('./models/User')
const Post = require('./models/Post')

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('DB connected'))
  .catch(e => console.log(`Error: ${ e }`))


const server = new ApolloServer({
  typeDefs,
  context: {
    User,
    Post
  }
})

server.listen(4000).then(({ url }) => {
  console.log(`Server listens on ${ url }`)
}) 