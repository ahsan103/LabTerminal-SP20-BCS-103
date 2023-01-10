
const express = require('express');
const routerTodo = require('./src/routes/todoRoute')

const app = express()
app.use(express.json())
app.use('/api' , routerTodo)

module.exports = app