import express from "express";
import { __dirname } from "./utils.js"
import handlebars from "express-handlebars";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.listen(8080, ()=> console.log("Server ok in PORT 8080"));

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

const httpServer = app.listen(8080, ()=> {
    console.log("Server is listening on port 8080")
})
