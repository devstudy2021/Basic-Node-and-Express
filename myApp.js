let express = require('express');
let app = express();
let bodyParser = require('body-parser');

/* console.log('Hello World');

app.get("/", (req, res) => {
    res.send("Hello Express");
}); */

app.use((req, res, next) => {
    console.log(req.method+" "+req.path+" - "+req.ip);
    next();
});

app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({time: req.time});
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

app.get("/:word/echo", (req, res) => {
    let word = req.params.word;
    res.json({echo: word});
});

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.route("/name")
    .get((req, res) => {
        let first = req.query.first;
        let last = req.query.last;
        res.json({name: first+' '+last});
    })
    .post((req, res) => {
        res.json(req.body.first+' '+req.body.last);
    });




























 module.exports = app;
