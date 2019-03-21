const express = require('express');
const app = express();
const connection = require('./middleware/connection');
const { handler } = require('./middleware/error');
const cors = require('./middleware/cors');

app.use(cors);
app.use(express.json());

app.use('/polls', connection, require('./routes/polls'));
app.use('/votes', connection, require('./routes/votes'));

app.use(handler);

module.exports = app;
