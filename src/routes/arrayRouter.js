const express = require('express');
const arrayController = require('../controllers/arrayController');

const router = express.Router();

router.post('/element-at-index/:char', arrayController.arrays_getNthElement);

router.post('/to-string', arrayController.arrays_arrayToCSVString);

router.post('/append', arrayController.arrays_addToArray);

router.post('/starts-with-vowel', arrayController.arrays_startsWithVowel);

router.post('/remove-element', arrayController.arrays_removeNthElement);

module.exports = router;
