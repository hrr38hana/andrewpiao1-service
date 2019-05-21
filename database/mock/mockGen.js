const data = require('./mockData.js')
const Product = require('../models.js')
const mongoose = require('mongoose')

//{brand, name, type, colorGroup, itemAdj, designAdj}

var randomSelectFrom = (dataArr) => {
  var i = Math.floor(Math.random() * dataArr.length)
  return dataArr[i];
}

var nameGen = (brand, name, type) => {
  return `${brand} ${name} ${type}`
}

var descriptionGen = (itemAdj, type, designAdj) =>{
  return `${itemAdj} ${type} designed for ${designAdj}.`
}

const mockProduct = (id) => {
  let product = {};
  let brand = randomSelectFrom(data.brand);
  let name = randomSelectFrom(data.name);
  let type = randomSelectFrom(data.type);
  let itemAdj = randomSelectFrom(data.itemAdj);
  let designAdj = randomSelectFrom(data.designAdj);

  product.id = id;
  product.name = nameGen(brand, name, type);
  product.brand = brand;
  product.type = type;
  product.colorGroup = randomSelectFrom(data.colorGroup);
  product.description = descriptionGen(itemAdj, type, designAdj);
  product.price = Math.ceil(Math.random()*100) + 15
  product.imagePath = 'https://www.w3schools.com/images/picture.jpg'

  return new Product(product)
}

const seed = async() => {
  await Product.deleteMany({});
  for (let i=1; i<=50; i++){
    const product = mockProduct(i);
    product.save()
  }
}

module.exports = seed;



