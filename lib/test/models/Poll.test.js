const Poll = require('../../models/Poll');

describe('Poll Model', () => {
  it('can recognize a good model', () => {
    const poll = new Poll({ 
      prompt: 'What is your favorite color?',
      choices: ['blue', 'pink', 'red'],
      creator: '1234'
    });
    expect(poll.toJSON()).toEqual({
      prompt: 'What is your favorite color?',
      choices: ['blue', 'pink', 'red'],
      creator: '1234',
      _id: expect.any(Object)
    });
  });
});
