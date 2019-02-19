const express = require('express')

const cors = require('cors')

const postsRouter = require('./routes/posts')
const postIDRouter = require('./routes/postid')

const server = express()

server.use(express.json())
server.use(cors())
server.use('/api/posts', postsRouter)
server.use('/api/posts', postIDRouter)

server.get('/', (req, res) => {
    res.send(`
      <h2>Blog Posts</h>
    `);
  });

module.exports = server