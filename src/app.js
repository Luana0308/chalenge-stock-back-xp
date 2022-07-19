const routers = require('./routes/router')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(routers)
app.use(cors())

module.exports = app
