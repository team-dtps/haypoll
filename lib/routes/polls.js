const { Router } = require('express');
const Poll = require('../models/Poll');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { prompt, choices } = req.body;
    const creator = '1234';
    Poll
      .create({ prompt, choices, creator })
      .then(poll => res.send(poll))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    Poll
      .find()
      .lean()
      .then(polls => res.send(polls))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    const { id } = req.params;
    Poll
      .find(id)
      .lean()
      .then(polls => res.send(polls))
      .catch(next);
  });
