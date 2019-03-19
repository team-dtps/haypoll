const Poll = require('../models/Poll');

module.exports = function(count = 5) {
  const polls = [...Array(count)].map((_, i) => ({
    prompt: `Do you like pink?${i}`,
    choices: ['yes', 'no'],
    creator: '1234'
  }));
  return Poll.create(polls);
};
