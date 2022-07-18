const suggestionCtrl = require('./../controllers/suggestion.controller');

const express = require('express');
const router = express.Router();
router.post('/suggestion', suggestionCtrl.saveSuggestion);


module.exports = router;