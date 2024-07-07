const express = require('express');
const Todolist = require('../model')
const router = express.Router();
const { getTodolist, getTodolists, createTodolist, deleteTodolist, updateTodolist } = require('../controllers/todolist.controller')


router.get('/', getTodolists);

router.get('/:id', getTodolist);

router.post('/', createTodolist);

router.put('/:id', updateTodolist);

router.delete('/:id', deleteTodolist);

module.exports = router;


