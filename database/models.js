
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', ()=>{console.log('--- Mongoose Connected ---')})

var Schema = mongoose.Schema;

var productSchema = new Schema({
  name: String,
  type: String,
  colorGroup: String,
  description: String,
  releaseDate: Date,
  price: Number,
  imagePath: String
})

var Product =  mongoose.model('Product', productSchema)

module.exports = Product
