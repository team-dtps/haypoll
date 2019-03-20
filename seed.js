require('dotenv').config();
require('./lib/utils/connect')();
const mongoose = require('mongoose');
const seedData = require('./lib/test/seedData');

seedData(5)
  .then(() => console.log('done'))
  .catch(err => console.error(err))
  .finally(() => mongoose.connection.close());
