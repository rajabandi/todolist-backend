const express = require('express');
const mongoose = require('mongoose');
const Todolist = require('./model');
const todolistRoute = require('./routes/todolist.route')
const app = express();

//middile ware or body-pass
app.use(express.json());

//routes
app.use('/api/todolists', todolistRoute)


app.get('/', async (req, res) => {
    res.send('hello')
})

mongoose.connect('mongodb+srv://bandirajaa:bandirajaa@cluster0.ushfr0w.mongodb.net/')
    .then(() => {
        console.log("DB connect...")
        app.listen(8080, () => console.log("server loading in 8080 port"))
    })
    .catch(err => console.log(err))

