const router = require("express").Router();
const db = require("./db/db");

router.get("/books", async (req, res) => {
    try {
        const books = await db("books");
        res.json(books)
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
})

router.post("/books", async(req, res) => {
    try{
        const {title, author, genre} = req.body;
         const book = await db("books").insert({
            title,
            author,
            genre
        });
        res.status(201).json(book);
    }catch(err){
        console.error(err);
        res.status(500).send("Internal server error");
    }
})

router.put("/books/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const {title, author, genre} = req.body;
        const book = await db("books").where({id}).update({
            title,
            author,
            genre
        },
        ["id", "title", "author", "genre"]
        );

        if(book.length !== 0){
            res.status(201).send(book);
        } else {
            res.status(404).json({error: "Book not found"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
})

router.delete("/books/:id", async (req, res) => {
    const {id} = req.params;

    try {
        const book = await db("books").where({id}).del();
        if(book !== 0){
            res.status(200).json({message: "Book deleted"});
        } else {
            res.status(404).json({error: "Book not found"});
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;