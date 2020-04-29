const express = require('express');
const stringController = require('../controllers/stringController');

const router = express.Router();

router.get('/hello/:string', stringController.strings_sayHello);

router.get('/upper/:string', stringController.strings_uppercase);

router.get('/lower/:string', stringController.strings_lowercase);

router.get('/first-characters/:string', stringController.strings_firstCharacters);

router.get('/first-character/:string', stringController.strings_firstCharacter);

module.exports = router;
