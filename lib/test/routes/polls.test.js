require('../dataHelpers');
const Poll = require('../../models/Poll');
const app = require('../../app');
const request = require('supertest');

const getPoll = () => {
  return Poll
    .findOne({ prompt: 'Do you like apples?' })
    .then(poll => {
      return JSON.parse(JSON.stringify(poll));
    });
};

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

  it('gets a list of polls by id', () => {
    getPoll()
      .then(poll => {
        return request(app)
          .get(`/polls/${poll._id}`)
          .then(res => {
            expect(res.ok).toBeTruthy();
            expect(res.body).toEqual({
              _id: expect.anyString,
              prompt: 'Do you like apples',
              choices: [],
              creator: ''
            });
          });
      });
  });
});
