const express = require('express');
const app = express();
const PORT = 3001;
const assert = require('assert');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/apps', function (req, res) {
  res.send('items')
})

app.post('/addItem', function(req, res){
    res.send('item added');
})

app.post('/deleteItem', function(req, res){
  res.send('delete Item');
})

app.listen(PORT, function () {
  console.log('Example app listening on port 3000!')
})
