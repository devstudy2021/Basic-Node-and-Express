let express = require('express');
let app = express();
require('dotenv').config()

/* console.log('Hello World');

app.get("/", (req, res) => {
    res.send("Hello Express");
}); */

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
    let item = "hello json";
    if (process.env.MESSAGE_STYLE === "uppercase") {
        item = item.toUpperCase();
    }

    res.json({"message": item});
});


































 module.exports = app;
