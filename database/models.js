
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=>{console.log('--- Mongoose Connected ---')})

var Schema = mongoose.Schema;

var productSchema = new Schema({
  id: Number,
  name: String,
  brand: String,
  type: String,
  colorGroup: String,
  description: String,
  price: Number,
  imagePaths: Object
})

var Product =  mongoose.model('Product', productSchema)

module.exports = Product
