const Article = require('../models/article');
const utils = require('../utils/utils');
const passport = require('passport');

const articleCtrl = {};
articleCtrl.getArticlesList = async (req, res) => {
    const articles = await Article.find();
    res.json(articles);
};

articleCtrl.getArticle = async (req, res) => {
    const articleId = req.params.id;
    const article = await Article.findById(articleId);
    res.json(article);
};

articleCtrl.saveArticle = async (req, res) => {
    try {
        const article = new Article({...req.body, date: new Date() });
        await article.save();
        res.json({
            'status': 'article saved'
        })
    }
    catch (e){
        res.status(400).json({'status': utils.showSchemaError(Article)})
    }
};

module.exports = articleCtrl;