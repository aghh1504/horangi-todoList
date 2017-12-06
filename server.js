const express = require('express');
const app = express();
const PORT = 3001;
const assert = require('assert');
const bodyParser = require('body-parser')
const fs = require('fs');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const reqPath = path.join(__dirname, './data.json');
let savedItems = JSON.parse(fs.readFileSync(reqPath, 'utf8'));

const updateItems = res =>{
  fs.writeFile(reqPath, JSON.stringify(savedItems), 'utf8', function(err) {
    if(err) {
      console.log(err);
    }
    res.send('ok')
  });
}

app.get('/getItems', function(req, res){
  res.send(savedItems)
})

app.post('/addItem', function(req, res){
  const newItem = req.body.item;
  const newId = Math.max(...savedItems.map(i => i.id)) + 1
  savedItems = [...savedItems, {id: newId,checked: false,text:newItem}].reverse();
  updateItems(res)
})

app.post('/deleteItem', function(req, res){
  const deleteId = req.body.id
  savedItems = savedItems.filter(item => item.id !== deleteId)
  updateItems(res)
})


app.post('/checkItem', function(req, res){
  const checkedId = req.body.id
  const itemToCheck = savedItems.find(item => item.id === checkedId)
  if (itemToCheck) {
    itemToCheck.checked = !itemToCheck.checked;
  }
  updateItems(res)
})

app.listen(PORT, function () {
  console.log('Example app listening on port 3001!')
})
