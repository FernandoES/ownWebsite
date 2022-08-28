const articleCtrl = require('./../controllers/articles.controller');
const multerInterceptor = require('./../interceptors/multer.interceptor')

const express = require('express');
const router = express.Router();

router.get('/articlesList', articleCtrl.getArticlesList);
router.get('/article/:id', articleCtrl.getArticle);
router.get('/image/:name', articleCtrl.getImage);
router.post('/saveArticle',checkAuthenticated, articleCtrl.saveArticle);
router.post('/editArticle/:id',checkAuthenticated, articleCtrl.editArticle);
router.post('/image',multerInterceptor.single('file'), articleCtrl.uploadImage);
router.delete('/article/:id',checkAuthenticated,articleCtrl.deleteArticle);

function checkAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    return null;
}


module.exports = router;