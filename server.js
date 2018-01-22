var express = require('express')
var path = require('path')
var fs = require("fs");
var _ = require("lodash")

const app = express();
const HttpStatus = require('http-status-codes');
app.use(express.static('./src/assets/images'));
app.use(express.static('./build'));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './build/index.html'));
});

app.get('/detail/:id', function (req, res) {
  res.sendFile(path.join(__dirname, './build/index.html'));
});

app.get('/checkout', function (req, res) {
  res.sendFile(path.join(__dirname, './build/index.html'));
});


app.get('/products', function (req, res) {
  fs.readFile("src/assets/json/fruits.json", 'utf-8', (error, data) => {
    if(error){
      res
    .status(HttpStatus.INTERNAL_SERVER_ERROR)
    .send({
        error: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR),
        status:error
    });
  }
     res
    .status(HttpStatus.OK)
    .send(JSON.parse(data))
  });
});

let port = process.env.PORT || 3000;


app.listen(port, function (error) {
  console.log(`server running at http://localhost:${port}`);
  if (error) {
    throw err
  }
});


