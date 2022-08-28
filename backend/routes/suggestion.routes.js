const suggestionCtrl = require('./../controllers/suggestion.controller');

const express = require('express');
const router = express.Router();
router.post('/suggestion', suggestionCtrl.saveSuggestion);
router.get('/suggestionsList',checkAuthenticated, suggestionCtrl.getSuggestionList);

function checkAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    return null;
}


module.exports = router;