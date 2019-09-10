var express = require('express');
var encoding = require('encoding');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.urlencoded({ extended: false }))

function encode(str){
  var utf8 = new Buffer.from(str, 'utf-8')
  var ascii = new Buffer.from(str, 'ascii')
  var utf16le = new Buffer.from(str, 'utf16le')
  var base64 = new Buffer.from(str, 'base64')
  var encodings = {utf8, ascii, utf16le, base64}
  return encodings
}

app.set('view engine', 'pug');
app.get('/', function(req, res) {
  res.render('index')
})

app.post('/encode', function(req, res) {
  var str = req.body.str
  var results = encode(str)
  var resString = JSON.stringify(results)
  var bytes = JSON.parse(resString)
  res.render('encode', {bytes})
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
