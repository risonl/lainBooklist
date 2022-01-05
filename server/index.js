import express from 'express'
import bookRoutes from './routes/books.js'
import mongoose from 'mongoose'
// var express = require('express')

var app = express()
const PORT = 8001
app.use(express.json())

app.use('/books', bookRoutes)

mongoose.connect('mongodb://localhost:27017/booklist').then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
.catch((e) => console.log(e));