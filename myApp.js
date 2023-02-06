let express = require('express');
let app = express();

/* app.get("/", (req, res) => {
    res.send("Hello Express");
}); */

app.get("/", (req, res) => {
    res.send("/views/index.html");
});

console.log('Hello World');


































 module.exports = app;
