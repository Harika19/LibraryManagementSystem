var express = require("express");

var mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "harika19",
    database: "libdb"
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('mysql connected');
});

var app = express();
//create db
app.get("/createdb", (req, res) => {
    let sql = 'CREATE DATABASE libdb';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('database created...');
    });
});

//create table
app.get("/createtable", (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY (id))';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('table created...');

    });
});

//insert data
app.get("/insert1", (req, res) => {
    let post = { name: 'DENNIS RICHIE' };
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('data 1 inserted in table....');

    });
});

app.get("/insert2", (req, res) => {
    let post = { name: 'BALAGURUSAMY' };
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('data 2 inserted in table....');

    });
});

app.get("/insert3", (req, res) => {
    let post = { name: 'ANDREW NG' };
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('data 3 inserted in table....');

    });
});

//select single post
app.get("/single/:id", (req, res) => {
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
    });
});



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


app.listen(5000, function (req, res) {
    console.log("Server started");
});
