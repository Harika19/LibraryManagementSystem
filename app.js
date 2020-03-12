var express = require("express");

var bookRoute = require("./routes/books");
var app = express();
var db = require("./models/index");

//create db
app.get("/createdb", (req, res) => {
    let sql = 'CREATE DATABASE libdb' ;
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('database created...');
    });
});

//create table
app.get("/createtable", (req, res) => {
    let sql = 'CREATE TABLE posting(id int AUTO_INCREMENT, name VARCHAR(255),count int, PRIMARY KEY (id))';
    db.query(sql, (err,result) =>{
        if(err) throw err;
        console.log(result);
        res.send('table created...');

    });
});

//insert data
app.get("/insert1", (req, res) => {
    let post = {name: 'DENNIS RICHIE', count: '5'};
    let sql = 'INSERT INTO posting SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('data 1 inserted in table....');

    });
});

app.get("/insert2", (req, res) => {
    let post = {name: 'BALAGURUSAMY', count: '5'};
    let sql = 'INSERT INTO posting SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('data 2 inserted in table....');

    });
});

app.get("/insert3", (req, res) => {
    let post = {name: 'ANDREW NG', count: '5'};
    let sql = 'INSERT INTO posting SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('data 3 inserted in table....');

    });
});

//select all  post
 app.get("/bookapi", (req, res) => {
    let sql = `SELECT * FROM posting`;
    let query = db.query(sql, (err, results) =>{
        if(err) throw err;
        console.log(results);
        res.json(results);
        
});
        });

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.use("/", bookRoute);

app.listen(5000, function(req, res) {
    console.log("Server started");
});
 
