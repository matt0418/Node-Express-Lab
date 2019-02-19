const express = require('express')

const postsRouter = require('./routes/posts')

const server = express()

server.use(express.json())
server.use('/api/posts', postsRouter)

server.get('/', (req, res) => {
    res.send(`
      <h2>Blog Posts</h>
    `);
  });

module.exports = server