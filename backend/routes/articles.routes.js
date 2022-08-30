const articleCtrl = require('./../controllers/articles.controller');
const multerInterceptor = require('./../interceptors/multer.interceptor')
const utils = require('../utils/utils');

const express = require('express');
const router = express.Router();

router.get('/articlesList', articleCtrl.getArticlesList);
router.get('/article/:id', articleCtrl.getArticle);
router.get('/image/:name', articleCtrl.getImage);
router.post('/saveArticle',utils.checkAuthenticated, articleCtrl.saveArticle);
router.post('/editArticle/:id',utils.checkAuthenticated, articleCtrl.editArticle);
router.post('/image',multerInterceptor.single('file'), articleCtrl.uploadImage);
router.post('/substituteImage/:imageName', articleCtrl.deleteImageIfThere, multerInterceptor.single('file'), articleCtrl.uploadImage);
router.delete('/article/:id',utils.checkAuthenticated,articleCtrl.deleteArticle);



module.exports = router;