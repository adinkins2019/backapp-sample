require("dotenv").config();
const process = require("process");
const express = require("express");
const server = express();
const router   = require("./routes");
const PORT = process.env.PORT || 3000;

server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use("/", router);

server.listen(PORT, ()=> {
    console.log(`Server is listening on PORT: ${PORT}`);
});