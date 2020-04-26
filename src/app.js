const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const { add, subtract, multiply } = require('./lib/numbers');

const app = express();

app.use(express.json());

app.get(`/strings/hello/:string`, (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-character/:string', (req, res) => {
  res.status(200).json({ result: firstCharacter(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const length = req.query.length || 1;
  res.status(200).json({ result: firstCharacters(req.params.string, length) });
});

app.get('/numbers/add/:num1/and/:num2', (req, res) => {
  const a = parseInt(req.params.num1, 10);
  const b = parseInt(req.params.num2, 10);
  if (Number.isInteger(a) && Number.isInteger(b)) {
    res.status(200).json({ result: add(a, b) });
  } else res.status(400).json({ error: 'Parameters must be valid numbers.' });
});

app.get('/numbers/subtract/:num2/from/:num1', (req, res) => {
  const a = parseInt(req.params.num1, 10);
  const b = parseInt(req.params.num2, 10);

  if (Number.isInteger(a) && Number.isInteger(b)) {
    res.status(200).json({ result: subtract(a, b) });
  } else res.status(400).json({ error: 'Parameters must be valid numbers.' });
});

app.post('/numbers/multiply', (req, res) => {
  if ('a' in req.body && 'b' in req.body) {
    const a = parseInt(req.body.a, 10);
    const b = parseInt(req.body.b, 10);
    if (Number.isInteger(a) && Number.isInteger(b)) {
      res.status(200).json({ result: multiply(a, b) });
    } else res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
});
module.exports = app;
