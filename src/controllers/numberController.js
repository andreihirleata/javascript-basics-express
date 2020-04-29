const { add, subtract, multiply, divide, remainder } = require('../lib/numbers');

exports.numbers_add = (req, res) => {
  const a = parseInt(req.params.num1, 10);
  const b = parseInt(req.params.num2, 10);
  if (Number.isInteger(a) && Number.isInteger(b)) {
    res.status(200).json({ result: add(a, b) });
  } else res.status(400).json({ error: 'Parameters must be valid numbers.' });
};

exports.numbers_subtract = (req, res) => {
  const a = parseInt(req.params.num1, 10);
  const b = parseInt(req.params.num2, 10);

  if (Number.isInteger(a) && Number.isInteger(b)) {
    res.status(200).json({ result: subtract(a, b) });
  } else res.status(400).json({ error: 'Parameters must be valid numbers.' });
};

exports.numbers_multiply = (req, res) => {
  if ('a' in req.body && 'b' in req.body) {
    const a = parseInt(req.body.a, 10);
    const b = parseInt(req.body.b, 10);
    if (Number.isInteger(a) && Number.isInteger(b)) {
      res.status(200).json({ result: multiply(a, b) });
    } else res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
};

exports.numbers_divide = (req, res) => {
  if ('a' in req.body && 'b' in req.body) {
    const a = parseInt(req.body.a, 10);
    const b = parseInt(req.body.b, 10);
    if (Number.isInteger(a) && Number.isInteger(b)) {
      if (b === 0) {
        res.status(400).json({ error: 'Unable to divide by 0.' });
      } else res.status(200).json({ result: divide(a, b) });
    } else res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
};

exports.number_remainder = (req, res) => {
  if ('a' in req.body && 'b' in req.body) {
    const a = parseInt(req.body.a, 10);
    const b = parseInt(req.body.b, 10);
    if (Number.isInteger(a) && Number.isInteger(b)) {
      if (b === 0) {
        res.status(400).json({ error: 'Unable to divide by 0.' });
      } else res.status(200).json({ result: remainder(a, b) });
    } else res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
};
