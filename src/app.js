const routers = require('./routes/Router')
const express = require('express')

const app = express()

app.use(express.json())
app.use(routers)

module.exports = app
