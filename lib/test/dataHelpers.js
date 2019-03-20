require('dotenv').config();
const mongoose = require('mongoose');
const seedData = require('./seedData');

const Poll = require('../models/Poll');
const connect = require('../utils/connect');

beforeAll(() => {
  return connect();
});
beforeEach(() => {
  return mongoose.connection.dropDatabase();
});
beforeEach(() => {
  return seedData(5);
});
afterAll(() => {
  return mongoose.connection.close();
});

const getPoll = () => {
  return Poll
    .findOne({ prompt: 'Do you like apples?' })
    .then(poll => {
      return JSON.parse(JSON.stringify(poll));
    });
};

const getVote = () => {
  return Poll
    .findOne({ prompt: 'Do you like apples?' })
    .then(poll => {
      return getVote
        .findOne({ _id: poll._id })
        .then(vote => {
          return JSON.parse(JSON.stringify(vote));
        });
    });
};

module.exports = {
  getPoll,
  getVote
};


