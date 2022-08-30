const suggestionCtrl = require('./../controllers/suggestion.controller');
const utils = require('../utils/utils');

const express = require('express');
const router = express.Router();
router.post('/suggestion', suggestionCtrl.saveSuggestion);
router.get('/suggestionsList',utils.checkAuthenticated, suggestionCtrl.getSuggestionList);
router.delete('/suggestion/:id', utils.checkAuthenticated, suggestionCtrl.deleteSuggestion);



module.exports = router;