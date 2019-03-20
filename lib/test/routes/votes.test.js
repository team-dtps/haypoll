const { getPoll } = require('../dataHelpers');
const app = require('../../app');
const request = require('supertest');

describe('votes routes', () => {
  it('creates a new vote when posted to', () => {
    getPoll()
      .then(poll => {
        return request(app)
          .post('/votes')
          .send({ pollId: poll._id, email:'email', vote: 'no'  })
          .then(res => {
            expect(res.body).toEqual({
              pollId: poll._id, 
              email:'email', 
              vote: 'no',
              __v: 0,
              _id: expect.any(String)
            });
          });

      });
  });
});
