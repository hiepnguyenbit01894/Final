/*
Cài đặt server
*/ 

var express = require('express');
var app = express();
/**
 * Cấu hình body-parser
 * 
 **/
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// Cors: truy cập tài nguyên web trên các tên miền khác nhau
var cors = require('cors')

app.use(cors());
// Tạo router và khai báo cổng cho app

let homeRouter = require('./app/routes/home.router')(app)

let productRouter = require('./app/routes/product.router')(app)

app.listen(2828, () => {
    console.log("Serve listening 2828");
})
module.exports = app;