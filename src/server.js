import express from "express";

const app = express();

console.log("hello");


const handleListen = () => console.log("listening on http://localhost:3000");
app.listen(3000);