const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');
const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');
const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('./lib/arrays');

const app = express();

app.use(express.json());

// STRINGS
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

// NUMBERS
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

app.post('/numbers/divide', (req, res) => {
  if ('a' in req.body && 'b' in req.body) {
    const a = parseInt(req.body.a, 10);
    const b = parseInt(req.body.b, 10);
    if (Number.isInteger(a) && Number.isInteger(b)) {
      if (b === 0) {
        res.status(400).json({ error: 'Unable to divide by 0.' });
      } else res.status(200).json({ result: divide(a, b) });
    } else res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
});

app.post('/numbers/remainder', (req, res) => {
  if ('a' in req.body && 'b' in req.body) {
    const a = parseInt(req.body.a, 10);
    const b = parseInt(req.body.b, 10);
    if (Number.isInteger(a) && Number.isInteger(b)) {
      if (b === 0) {
        res.status(400).json({ error: 'Unable to divide by 0.' });
      } else res.status(200).json({ result: remainder(a, b) });
    } else res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
});

// BOOLEANS

app.post('/booleans/negate', (req, res) => {
  const bool = req.body.value;
  res.status(200).json({ result: negate(bool) });
});

app.post('/booleans/truthiness', (req, res) => {
  const bool = req.body.value;
  res.status(200).json({ result: truthiness(bool) });
});

app.get('/booleans/is-odd/:num', (req, res) => {
  if (Number.isInteger(parseInt(req.params.num, 10))) {
    res.status(200).json({ result: isOdd(req.params.num) });
  } else res.status(400).json({ error: 'Parameter must be a number.' });
});

app.get('/booleans/:string/starts-with/:char', (req, res) => {
  if (req.params.char.length === 1) {
    res.status(200).json({ result: startsWith(req.params.char, req.params.string) });
  } else res.status(400).json({ error: 'Parameter "character" must be a single character.' });
});

// ARRAYS
app.post('/arrays/element-at-index/:char', (req, res) => {
  res.status(200).json({ result: getNthElement(req.params.char, req.body.array) });
});

app.post('/arrays/to-string', (req, res) => {
  res.status(200).json({ result: arrayToCSVString(req.body.array) });
});

app.post('/arrays/append', (req, res) => {
  res.status(200).json({ result: addToArray2(req.body.value, req.body.array) });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  res.status(200).json({ result: elementsStartingWithAVowel(req.body.array) });
});

app.post('/arrays/remove-element', (req, res) => {
  const index = req.query.index || 0;
  res.status(200).json({ result: removeNthElement2(index, req.body.array) });
});
module.exports = app;
