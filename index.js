var express = require('express');
var encoding = require('encoding');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.urlencoded({ extended: false }))

function encode(str){
  var utf8 = encoding.convert(str, "UTF-8");
  var ascii = encoding.convert(str, "ASCII")
  var utf16 = encoding.convert(str, "UTF-16")
  var utf16be = encoding.convert(str, "UTF-16BE")
  var encodings = {utf8, ascii, utf16, utf16be}
  return encodings
}

app.set('view engine', 'pug');
app.get('/', function(req, res) {
  res.render('index')
})

app.post('/encode', function(req, res) {
  var str = req.body.str
  var answers = encode(str)
  // console.log(answers)
  res.render('encode', {answers})
  // res.json(answers)
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
