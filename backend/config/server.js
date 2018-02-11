const port = 3004

const bodyParser = require('body-parser')
const express = require('express')
const allowCors = require('./cors')
const queryParser = require('express-query-int')
const server = express()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, function(){
	console.log(`Server rodando na porta: ${port}`)
})

module.exports = server