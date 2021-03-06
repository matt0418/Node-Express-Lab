require('dotenv').config()
const express = require('express')

const server = require('./server')

const path = require('path')

const port = process.env.PORT || 4000

server.use(express.static(path.join(__dirname, 'client/build')))

if(process.env.NODE_ENV === 'production') {
    server.use(express.static(path.join(__dirname, 'client/build')));
    //
    server.get('*', (req, res) => {
      res.sendfile(path.join(__dirname = 'client/build/index.html'));
    })
  }

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/public/index.html'))
})
server.listen(port, () => {
    console.log(`\n*** Server Running on http://localhost:${port}***\n`)
})