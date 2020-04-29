const express = require('express');
const numberController = require('../controllers/numberController');

const router = express.Router();

router.get('/add/:num1/and/:num2', numberController.numbers_add);

router.get('/subtract/:num2/from/:num1', numberController.numbers_subtract);

router.post('/multiply', numberController.numbers_multiply);

router.post('/divide', numberController.numbers_divide);

router.post('/remainder', numberController.number_remainder);

module.exports = router;
