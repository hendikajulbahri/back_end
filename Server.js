const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const mysql = require('mysql');
const cors = require('cors')
const db = mysql.createConnection({
    host: 'localhost',
    user: 'hendika',
    password: 'admin123',
    database: 'wellborn'
});
// app.use(cors())
db.connect();

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET','PUT','POST','DELETE');
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
        next();
})


app.get('/product', function(req, res){
    var sql = 'SELECT * FROM product';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        // console.log(result)
        res.send(result)
    })
    
})




app.listen(3333, function(){
    console.log('Bisa Servernya !!!')
})