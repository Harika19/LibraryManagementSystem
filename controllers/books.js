var express = require("express");
var db = require("../models/index");

exports.homePage = (req, res) =>  {
    res.render("home");
};



exports.registerPage = (req, res) => {
    let details = req.body;
    res.render("show", { aa: details });
};

exports.loginPage = (req, res) =>  {  
    res.render("showlog");
};



exports.bookSearch =  (req, res) =>  {
    // console.log(req.body);
    let sql = `SELECT * FROM posting WHERE id = ${req.body.bname}`;
    db.query(sql, (err, results) => {
        if (err) {
            throw err;
        } else {
            res.render("booksearchshow", { book: results[0] });
        }
    });
};




exports.bookIssue = (req, res) => {
    // console.log(req.body);
    let sql = `SELECT * FROM posting WHERE id = ${req.body.bname}`;
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        } else {
            res.render("bookissueshow", { book: result[0] });
        }
    });
};
 
exports.bookUpdate = (req, res) => {
    // console.log(req.body);
    
    let sql = `UPDATE posting SET title = ? 
                WHERE id = ${req.params.bname}`;   
                let data = [false, req.params.bname]; 
    db.query(sql, data, (err, results) => {
        if (err) {
            throw err;
        } else {
            console.log('rows effected', results.affectedRows);
        }
    });
};
