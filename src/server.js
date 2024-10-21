import express from "express";

const app = express();

//pug페이지를 렌더링하는 부분
app.set("view engine","pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/",(req, res) => res.render("home"));
app.get("/*",(req, res) => res.render("home"));

const handleListen = () => console.log("listening on http://localhost:3000");
app.listen(3000, handleListen);