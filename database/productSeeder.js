var Product = require('./models')

var mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true });

var product = new Product({
  name: 'car',
  description: 'used to ride around',
  price: 200000
})

product.save((err, res)=>{
  console.log(res)
  mongoose.disconnect();
})