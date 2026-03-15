const LibraryModel = require("../models/library.model");

// Add a book
const addBook = async (req, res)=>{
    try{
        const {title, author, status} = req.body;
        const book = await LibraryModel.create({
            title, author, status: status||"available"
        })
        res.status(201).json({message : "book added successfully", book})
    }catch(error){
        res.status(500).json({message : "adding book failed", error: error.message})
    }
}

module.exports = {addBook}