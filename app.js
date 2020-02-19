var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", function(req, res) {
    let details = req.body;
    res.render("show", { aa: details });
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/booksearch", (req, res) => {
    res.render("booksearch");
});

app.post("/booksearch", function(req, res) {
    var q = [
        {
            name: "Rahul",
            id: 1
        },
        {
            name: "Ritu",
            id: 2
        },
        {
            name: "Harika",
            id: 3
        }
    ];
    let booksearch = req.body;
    res.render("booksearchshow", { bb: booksearch });
});

app.get("/bookissue", (req, res) => {
    res.render("bookissue");
});

app.listen(3000, function(req, res) {
    console.log("Server started");
});
