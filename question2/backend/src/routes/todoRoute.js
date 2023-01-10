const express = require('express');
const { getTodo, createTodo, deleteTodo, updateTodo } = require('../controller/todoController');

const routerTodo =express.Router()

routerTodo.route('/todo').get(getTodo)
routerTodo.route('/todo').post(createTodo)
routerTodo.route('/todo/:id').delete(deleteTodo)
routerTodo.route('/todo/:id').put(updateTodo)

module.exports = routerTodo