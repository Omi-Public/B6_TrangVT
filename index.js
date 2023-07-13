const { connection } = require('./db');
const md5 = require('md5');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});
app.post('/', async function (req, res) {
    // console.log(req.query);
    // console.log(req.params);
    // console.log(req.);

    res.json(req.query);
});
/** Login */
app.post('/login', async function (req, res) {
    const username = req.query.username;
    const password = md5(req.query.password);
    console.log(username + " " + password)
    connection.query('SELECT * FROM tbl_user WHERE username=? AND password=?', [username, password], function (error, results, fields) {
        if (results) {
            res.json({
                result: "Welcome " + results[0].username
            });
        }
        else {
            res.json({
                result: "User not found!"
            });
        }
    })
})

app.get('/user', function (req, res) {
    var id = req.query.id;
    connection.query('SELECT * FROM tbl_user WHERE id=?', [id], function (error, results, fields) {
        res.send(results)
    })
})

app.post('/create', async function (req, res) {
    var username = req.query.username;
    var password = req.query.password;
    var DoB = req.query.DoB;
    var conutry = req.query.hometown;
    var age = req.query.age;

    // res.send(username);
    connection.query('Insert into tbl_user(`username`, `password`, `DoB`, `conutry`,`age`) values(?,?,?,?,?)', [username, md5(password), DoB, hometown, age], function (error, results, fields) {
        res.send(results)
    });
    // var user = await connection.query('SELECT * FROM tbl_user where id = 1', function (error, results, fields) {
    // res.send(results)
    //});
    // res.json(JSON.stringify(user));
    // res.send(user);
});

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", 'localhost', port)
})