require('../dataHelpers');
const Poll = require('../../models/Poll');
const app = require('../../app');
const request = require('supertest');



describe('votes routes', () => {
  it('creates a new vote when posted to', () => {
    return Poll.create({ prompt: 'prompt', choices: ['no', 'yes'], creator: 'email' })
      .then(poll => {
        return request(app)
          .post('/votes')
          .send({ pollId: poll._id, email:'email', vote: 'no' })
          .then(res => {
            expect(res.body).toEqual({
              _id: expect.any(String),
              pollId: expect.any(String), 
              email:'email', 
              vote: 'no',
              __v: 0
            });
          });
      });
  });

  it('gets a list of votes', () => {
    return request(app)
      .get('/votes')
      .then(res => {
        expect(res.ok).toBeTruthy();
        expect(res.body).toHaveLength(50);
      });
  });
});
