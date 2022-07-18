const articleCtrl = require('./../controllers/articles.controller');

const express = require('express');
const router = express.Router();

router.get('/articlesList', articleCtrl.getArticlesList);
router.get('/article/:id', articleCtrl.getArticle);
router.post('/saveArticle',checkAuthenticated, articleCtrl.saveArticle);

function checkAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    return null;
}


module.exports = router;