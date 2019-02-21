require('dotenv').config()

const server = require('./server')

const path = require('path')

const port = process.env.PORT || 4000

server.use(express.static(path.join(_dirname, 'client/build')))
server.get('*', (req, res) => {
    res.sendFile(path.join(_dirname+'/client/public/index.html'))
})
server.listen(port, () => {
    console.log(`\n*** Server Running on http://localhost:${port}***\n`)
})