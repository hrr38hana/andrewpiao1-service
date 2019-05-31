const seed = require('./mock/mockGen.js')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fec', { useNewUrlParser: true });

const seedMockData = async() => {
  await seed()
  process.exit();
}
seedMockData()
