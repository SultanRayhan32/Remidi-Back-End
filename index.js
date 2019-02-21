var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
var app = express({defaultErrorHandler:false});
var mysql = require('mysql');

const port = 2017;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'jeffrey',
    password: '12345',
    database: 'hotelbertasbih',
    port: 3306
});

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : false}))

const {
    KamarRouter , KategoriRouter , AuthRouters
}  = require('./Routers');

app.use('/kamar' , KamarRouter)
app.use('/kategori' , KategoriRouter);
app.use('/Auth' , AuthRouters )

app.get('/' ,(req, res)=>{
    res.send('<h1>oeoeoeorer33313</h1>')
})


app.listen(port, () => console.log('API Aktif di port ' + port));