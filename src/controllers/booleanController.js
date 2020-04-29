const { negate, truthiness, isOdd, startsWith } = require('../lib/booleans');

exports.boolean_negate = (req, res) => {
  const bool = req.body.value;
  res.status(200).json({ result: negate(bool) });
};

exports.boolean_truthiness = (req, res) => {
  const bool = req.body.value;
  res.status(200).json({ result: truthiness(bool) });
};

exports.boolean_isOdd = (req, res) => {
  if (Number.isInteger(parseInt(req.params.num, 10))) {
    res.status(200).json({ result: isOdd(req.params.num) });
  } else res.status(400).json({ error: 'Parameter must be a number.' });
};

exports.boolean_startsWith = (req, res) => {
  if (req.params.char.length === 1) {
    res.status(200).json({ result: startsWith(req.params.char, req.params.string) });
  } else res.status(400).json({ error: 'Parameter "character" must be a single character.' });
};
