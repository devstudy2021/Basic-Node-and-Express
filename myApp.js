let express = require('express');
let app = express();

/* console.log('Hello World');

app.get("/", (req, res) => {
    res.send("Hello Express");
}); */

app.use((req, res, next) => {
    console.log(req.method+" "+req.path+" - "+req.ip);
    next();
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
    let item = "Hello json";

    if (process.env.MESSAGE_STYLE === "uppercase") {
        item = item.toUpperCase();
    }
        res.json({"message": item});
});


































 module.exports = app;
