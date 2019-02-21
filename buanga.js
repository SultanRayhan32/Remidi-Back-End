// FilterKamar : (req, res) =>{
//     var nomorkamar = req.query.nomorkamar;       
//     var categoryid = req.query.categoryid;
//     var sql = `SELECT * FROM tablekamar WHERE nomorkamar = ${nomorkamar} AND categoryid = ${categoryid};`;
//     db.query(sql , (err, results)=>{
//         res.send(results)
//     })
// },