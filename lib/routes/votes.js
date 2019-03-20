const { Router } = require('express');
const Vote = require('../models/Vote');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { pollId, email, vote } = req.body;
    Vote
      .create({ pollId, email, vote })
      .then(vote => res.send(vote))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Vote
      .find()
      .lean()
      .then(votes => res.send(votes))
      .catch(next);
  });
