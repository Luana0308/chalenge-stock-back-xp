const routers = require('./routes/router')
const express = require('express')

const app = express()

app.use(express.json())
app.use(routers)

module.exports = app
