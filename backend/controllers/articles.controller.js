const Article = require('../models/article');
const utils = require('../utils/utils');
const path = require('path');
const fs = require('fs');

const textLength = 300;
const markdownSymbols = ['*', '**', '``', '~~','_' ,'__'];

const articleCtrl = {};
articleCtrl.getArticlesList = async (req, res) => {
    const articles = await Article.find();
    res.json(articles.map(article => {
        return {...article,
            author: article.author,
            date: article.date,
            title: article.title,
            _id: article._id,
            imageName: article.imageName,
            body: cutTextAvoidingMarkdown(article.body)};
    }));
};

articleCtrl.getArticle = async (req, res) => {
    const articleId = req.params.id;
    if (!articleId || articleId === 'undefined') {
        res.status(400).json({'status': 'response.article.error.noArticleId'});
    }
    const article = await Article.findById(articleId);
    res.json(article);
};

articleCtrl.getImage = async (req, res) => {
    const imageName = req.params.name;
    if(!imageName) {
        res.status(400).json({'status': 'response.article.error.noImageName'});
    }
    downloadImage(imageName, res);
}

articleCtrl.saveArticle = async (req, res) => {
    try {
        const article = new Article({...req.body, date: new Date() });
        await article.save();
        res.json({
            'status': 'response.success.articleSaved'
        })
    }
    catch (e){
        res.status(400).json(utils.showSchemaError(Article))
    }
};

articleCtrl.uploadImage = async (req, res) => {
    if(req.fileValidationError) {
        res.status(400).json({'status': req.fileValidationError});
        return;
    }
    const file = req.file;
    if(!file) {
        res.status(400).json({'status': 'response.error.noImage'});
        return;
    }
        res.json({'imageName': file.filename});
}

 function downloadImage(imageName, res)  {
    const imagePath = path.join(__dirname, '..', 'images', imageName);
    const file = fs.readFileSync(imagePath, 'binary');
    res.setHeader('Content-Length', file.length);
    res.write(file, 'binary');
    res.end();
 }

 function cutTextAvoidingMarkdown(text) {
    let reducedText = text.slice(0, textLength);
    const markDownSymbolsOpened = markdownSymbols.filter(s => {
        return (reducedText.split(s)?.length -1)%2 > 0;});
    return reducedText + markDownSymbolsOpened.join(" ") + "...";
 }

module.exports = articleCtrl;