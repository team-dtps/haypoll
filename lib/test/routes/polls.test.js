require('../dataHelpers');
const app = require('../../app');
const request = require('supertest');

describe('polls routes', () => {
  it('creates a new poll when posted to', () => {
    return request(app)
      .post('/polls')
      .send({ prompt: 'Do you like Polls?', choices:['yes', 'no'], creator: '1234'  })
      .then(res => {
        expect(res.body).toEqual({
          prompt: 'Do you like Polls?', 
          choices:['yes', 'no'], 
          creator: '1234',
          __v: 0,
          _id: expect.any(String)
        });
      });
  });

  it('gets a list of polls', () => {
    return request(app)
      .get('/polls')
      .then(res => {
        expect(res.body).toHaveLength(5);
      });
  });
});
