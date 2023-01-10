
const express = require('express');
const routerTodo = require('./src/routes/todoRoute')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use('/api' , routerTodo)

module.exports = app