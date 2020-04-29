const express = require('express');

const stringRouter = require('./routes/stringRouter');
const numberRouter = require('./routes/numberRouter');
const booleanRouter = require('./routes/booleanRouter');
const arrayRouter = require('./routes/arrayRouter');

const app = express();

app.use(express.json());

app.use('/strings', stringRouter);
app.use('/numbers', numberRouter);
app.use('/booleans', booleanRouter);
app.use('/arrays', arrayRouter);

module.exports = app;
