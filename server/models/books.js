import mongoose from 'mongoose'

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    synopsis: String,
})

const Books = mongoose.model('Books', bookSchema);

export default Books;