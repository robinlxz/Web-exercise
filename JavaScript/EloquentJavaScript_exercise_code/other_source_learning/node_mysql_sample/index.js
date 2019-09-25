const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'nodemysql',
    password: 'testPassword',
    database: 'acme'
})

db.connect();

app.get('/users', (req, res) => {
    const sql = 'SELECT id, first_name, email FROM users ORDER BY id';

    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result);
    });
});

app.listen(5000, ()=> console.log('Server started'));