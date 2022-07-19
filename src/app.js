const routers = require('./routes/router')
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.use(express.json())
app.use(routers)

// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
//   next()
// })

module.exports = app
