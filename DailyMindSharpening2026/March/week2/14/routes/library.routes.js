const express = require("express");
const { addBook } = require("../controllers/library.controller");
const { requiredBookFields } = require("../middleware/library.middleware");
const router = express.Router(); 

// POST 
router.post("/library/books", requiredBookFields, addBook);

module.exports = router;