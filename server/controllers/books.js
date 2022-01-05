import express from 'express'
import Books from "../models/books.js"


export const getBooks = async (req, res) => {
    try {
        const postBooks = await Books.find();

        res.status(200).json(postBooks);
    }
    catch (e) {
        res.status(404).json({message: "Couldn't find anything"})
    }
}

export const addBook = async (req, res) => {
    const book = req.body;

    const newBook = new Books({...book})

    try {
        await newBook.save();

        res.status(201).json(newBook);
    }
    catch (e) {
        res.status(403).json({message: "Couldn't create post"})
    }
}