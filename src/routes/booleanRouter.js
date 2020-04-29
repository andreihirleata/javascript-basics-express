const express = require('express');
const booleanController = require('../controllers/booleanController');

const router = express.Router();

router.post('/negate', booleanController.boolean_negate);

router.post('/truthiness', booleanController.boolean_truthiness);

router.get('/is-odd/:num', booleanController.boolean_isOdd);

router.get('/:string/starts-with/:char', booleanController.boolean_startsWith);

module.exports = router;
