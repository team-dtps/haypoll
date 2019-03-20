const Poll = require('../models/Poll');
const Vote = require('../models/Vote');
const chance = require('chance').Chance();

const prompts = [
  'Are you cold?',
  'Was today fun?',
  'Do you have pet?',
  'Do you like to code?',
  'Do horses eat hay?'
];

const choices = ['yes', 'no'];

const seedData = () => {
  return Promise.all(
    prompts.map((prompt) => {
      return Poll.create({
        prompt: prompt,
        choices: ['yes', 'no'],
        creator: 'email@email.com'
      });
    })
  )
    .then(polls => {
      return Promise.all(
        polls.map(poll => {
          return Promise.all([...Array(10)].map(() => {
            return Vote.create({
              vote: chance.pickone(choices),
              email: 'email1@email.com',
              pollId: poll._id
            });
          })
          );
        })
      );
    });
};

module.exports = seedData;
