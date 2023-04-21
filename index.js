
var express = require('express');
var app = express();
 
/**
 * Cấu hình body-parser
 * 
 **/ 
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
var cors = require('cors')

var cors = require('cors')

app.use(cors()) ;

var homeRouter = require('./app/routes/home.router')(app)

var bookRouter = require('./app/routes/book.router')(app)

app.listen(32000, function () {
    console.log("Server listening 4444");
})