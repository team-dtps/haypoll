const { Router } = require('express');
const Poll = require('../models/Poll');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { prompt, choices } = req.body;
    const creator = '1234';
    Poll
      .create({ prompt, choices, creator })
      .then(poll => {
        console.log('RESSS', poll);
        res.send({ prompt, choices, creator });}
      )
      .catch(next);
  });
// .get('/', (req, res, next) => {
//   Poll
//     .find()
//     .lean()
//     .then(polls => res.send(polls))
//     .catch(next);
// });
