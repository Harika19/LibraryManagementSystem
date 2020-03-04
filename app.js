var express = require("express");
var app = express();



var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", function (req, res) {
    let details = req.body;
    res.render("show", { aa: details });
});

app.get("/login", (req, res) => {
    res.render("login");
});


app.post("/login", function (req, res) {
    let details = req.body;
    res.render("showlog");
});

app.get("/booksearch", (req, res) => {
    res.render("booksearch");
});

app.post("/booksearch", function (req, res) {
    var q = [
        {
            name: "DENNIS RICHIE",
            id: 1
        },
        {
            name: "BALAGURUSAMY",
            id: 2
        },
        {
            name: "ANDREW NG",
            id: 3
        }
    ];
    let booksearch = req.body;
    console.log(booksearch);
    res.render("booksearchshow", { bb: booksearch, datas: q });
});

app.get("/bookissue", (req, res) => {
    res.render("bookissue");
});

app.post("/bookissue", function (req, res) {
    var w = [
        {
            name: "DENNIS RICHIE",
            id: 1,
            count: 5
        },
        {
            name: "BALAGURUSAMY",
            id: 2,
            count: 5
        },
        {
            name: "ANDREW NG",
            id: 3,
            count: 5
        }
    ];
    let bookissue = req.body;
    console.log(bookissue);
    res.render("bookissueshow", { bb: bookissue, dataw: w });
});


app.listen(3000, function (req, res) {
    console.log("Server started");
});
































