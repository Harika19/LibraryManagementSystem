var express = require("express");
var router = express.Router();
var bookController = require("../controllers/books");


router.get("/", bookController.homePage);

router.get("/register", function(req, res){
    res.render("register");
});

router.post("/register", bookController.registerPage);

router.get("/login",  (req, res) => {
    res.render("login");
});


router.post("/login", bookController.loginPage);

//router.get("/booksearch", bookController.bookSearch);

router.get("/booksearch", function(req, res)  {
    res.render("booksearch");
});

router.post("/booksearch", bookController.bookSearch);



/*app.post("/booksearch", function(req, res) {
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
*/



router.post("/bookissue", bookController.bookIssue);

router.get("/bookissue", (req, res) => {
    res.render("bookissue");
});


/*
app.post("/bookissue", function(req, res) {
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

*/

router.get("/bookupdate", (req, res) => {
    res.render("bookupdate");
});

router.post("/bookupdate", bookController.bookUpdate);

module.exports = router;
