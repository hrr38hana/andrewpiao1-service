const express = require('express');
const app = express();
const PORT = 3000;
const Product = require('../database/models.js')
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/public'))

app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/images', (req,res)=>{
  Product.find({}).limit(1).exec()
    .then((products)=>{
      // console.log("*** RETURNED PRODUCTS:  ", products)
      res.send(products)
    })


})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))