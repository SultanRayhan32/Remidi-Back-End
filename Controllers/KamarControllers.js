var mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'jeffrey',
    password: '12345',
    database: 'hotelbertasbih',
    port: 3306
});

module.exports = {
    GetKamar : (req, res)=>{
        var sql = 'SELECT * FROM tablekamar;' ;
        db.query(sql , (err, results)=>{
            res.send(results)
        })
    }, // UNTUK MELIHAT SEMUA KAMAR

    AddKamar : (req, res)=>{
        var { nomorkamar, categoryid, harga } = req.body;
        var sql = `INSERT INTO tablekamar VALUES(null , ${nomorkamar} , ${categoryid} , ${harga});`;
        db.query(sql , (err , results)=>{
            if(err){
                console.log(err.message)
            }
            console.log(results);
        })
    }, //ADD KAMAR
    
    EditKamar : (req , res) =>{
        var {  id ,  nomorkamar, categoryid, harga } = req.body;
        var sql = `UPDATE tablekamar SET nomorkamar = ${nomorkamar} , categoryid = ${categoryid} , harga = ${harga}
                    WHERE id = ${id};`;
        db.query(sql , (err ,results)=>{
            if(err){
                console.log(err.message)
            }
            console.log(results);
        })
    },
    DeleteKamar : (req, res) =>{
        var id = req.query.id;
        var sql = `DELETE tablekamar from tablekamar WHERE id = ${id};`;
        db.query(sql , (err, results)=>{
            if(err){
                console.log(err.message)
            }
            console.log(results);
        })
    },
    FilterKamarByCategory : (req, res)=>{
        var filterKategori = req.query.filter;
        var sql = `SELECT * FROM tablekamar
                JOIN tablecategory
                ON tablekamar.categoryid = tablecategory.id
                WHERE tablecategory.namacategory like '%${filterKategori}';`;
            db.query(sql ,(err , results)=>{
                res.send(results)
            })
        }
       

}