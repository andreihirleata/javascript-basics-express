const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('../lib/arrays');

exports.arrays_getNthElement = (req, res) => {
  res.status(200).json({ result: getNthElement(req.params.char, req.body.array) });
};

exports.arrays_arrayToCSVString = (req, res) => {
  res.status(200).json({ result: arrayToCSVString(req.body.array) });
};

exports.arrays_addToArray = (req, res) => {
  res.status(200).json({ result: addToArray2(req.body.value, req.body.array) });
};

exports.arrays_startsWithVowel = (req, res) => {
  res.status(200).json({ result: elementsStartingWithAVowel(req.body.array) });
};

exports.arrays_removeNthElement = (req, res) => {
  const index = req.query.index || 0;
  res.status(200).json({ result: removeNthElement2(index, req.body.array) });
};
