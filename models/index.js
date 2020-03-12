var mysql = require('mysql');


var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "harika19",
    database: "libdb"    
});

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('mysql connected');
});


module.exports = db;
