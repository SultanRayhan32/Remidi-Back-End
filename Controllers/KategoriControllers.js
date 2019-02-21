var mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'jeffrey',
    password: '12345',
    database: 'hotelbertasbih',
    port: 3306
});

module.exports = {
    GetKategori : (req , res) =>{
        var sql = 'SELECT * FROM tablecategory;';
        db.query(sql, (err, results)=>{
            res.send(results);
        })
    },
    AddKategori : (req, res) =>{
        var newkategori = req.body.kategoribaru;
        var sql = `INSERT INTO tablecategory VALUES(null , '${newkategori}');`;
        db.query(sql,(err, results)=>{
            console.log(results)
        })
    },
    EditKategori : (req, res) =>{
        var id = req.body.id;
        var EditKategori = req.body.kategori;
        var sql = `UPDATE tablecategory SET namacategory = '${EditKategori}'
                    WHERE id = ${id};`;
        db.query(sql,(err, results)=>{
            console.log(results);
        })
    },
    DeleteKategori : (req , res) =>{
        var id = req.query.id;
        var sql = `DELETE tablecategory FROM tablecategory WHERE id = ${id};`;
        db.query(sql, (err ,results)=>{
            console.log(results)
        })
    }
}