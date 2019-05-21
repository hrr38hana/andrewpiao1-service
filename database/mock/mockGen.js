const data = require('./mockData.js')
const Product = require('../models.js')

//{brand, name, type, colorGroup, itemAdj, designAdj}

var randomSelectFrom = (dataArr) => {
  var i = Math.floor(Math.random() * dataArr.length)
  return dataArr[i];
}

var randomName = (brand, name, type) => {

}

// var productSchema = new Schema({
//   name: String,
//   type: String,
//   colorGroup: String,
//   description: String,
//   releaseDate: Date,
//   price: Number
// })

