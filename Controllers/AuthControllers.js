var mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'jeffrey',
    password: '12345',
    database: 'hotelbertasbih',
    port: 3306
});

module.exports = {
    UserLogin : (req, res) =>{
        var username = req.query.username;
        var password = req.query.password;
        var sql = `SELECT * FROM tableuser WHERE username = '${username}' AND password = '${password}' ;`;
        db.query(sql,(err, results)=>{
            res.send(results);
            console.log(results)
        })
    },
    tes : (req, res) =>{
        var sql = 'SELECT * FROM tableuser;';
        db.query(sql, (err, results)=>{
            res.send(results)
        })
    },
    AddUser : (req, res) =>{
        var {username , email , password} = req.body;

        var sql = `INSERT INTO tableuser VALUES(null , '${username}' , '${email}' , '${password}' , 'users');`;
        db.query(sql, (err, results)=>{
            console.log(results)
        })
    }

}