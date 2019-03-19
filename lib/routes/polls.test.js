require('dotenv').config();
require('../../lib/utils/connect')();
// const { getPoll } = require('../test/dataHelpers');
const app = require('../../lib/app');
 
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
        });
      });
  });
});
