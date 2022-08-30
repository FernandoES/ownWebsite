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
            authorName: article.authorName,
            authorMail: article.authorMail,
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
        return;
    }
    const article = await Article.findById(articleId);
    if (!article) {
        res.status(400).json({'status': 'response.article.error.noArticleId'});
        return;
    }
    res.json(article);
};

articleCtrl.getImage = async (req, res) => {
    try {
        const imageName = req.params.name;
        if(!imageName) {
            res.status(400).json({'status': 'response.article.error.noImageName'});
            return;
        }
        downloadImage(imageName, res);
        return;
    }
    catch (e) {
        res.status(400).json({'status': 'response.error.unknown'});
    }
}

articleCtrl.editArticle = async (req,res) => {
    try {
        if(req.params.id) {
            await Article.findByIdAndUpdate(req.params.id, req.body);
            res.json({"status": "response.article.success.saved"});
        }
    }
    catch (e){
        res.status(400).json(utils.showSchemaError(Article))
    }
}

articleCtrl.saveArticle = async (req, res) => {
    try {
        const article = new Article({...req.body, date: new Date() });
        await article.save();
        res.json({
            'status': 'response.article.success.saved'
        });
        return;
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

articleCtrl.deleteArticle = async (req, res) => {
    try {
        if(req.params.id) {
            const articleToDelete = await Article.findById(req.params.id);
            if (articleToDelete.authorMail != req.user.authorMail) {
                res.status(400).json({'status': 'response.error.notAuthor'})
            }
            await Article.findByIdAndDelete(req.params.id);
            res.json({'status': 'response.success.articleDeleted'});
            return;
        }
    }
    catch (e){
        res.status(400).json(utils.showSchemaError(Article))
    }
}

articleCtrl.deleteImageIfThere = async (req, res, next) => {
    try {
        if(req.params.imageName){
            const imagePath = getImageName(req.params.imageName);
            const articleHasAlreadyAnImage = fs.existsSync(imagePath);
            if(articleHasAlreadyAnImage) {
                await fs.unlink(imagePath, (e) => {
                    if (e) {
                        throw e;
                    }
                });
            }
        }
        next();
    }
    catch (e) {
        return {'status': 'response.common.required', 'params': 'name'};
    }
}

 function downloadImage(imageName, res)  {
    try {

        const imagePath = getImageName(imageName);
        const file = fs.readFileSync(imagePath, 'binary');
        res.setHeader('Content-Length', file.length);
        res.write(file, 'binary');
        res.end();
    }
    catch (e) {
        throw e;
    }
 }

 function cutTextAvoidingMarkdown(text) {
    let reducedText = text.slice(0, textLength);
    const markDownSymbolsOpened = markdownSymbols.filter(s => {
        return (reducedText.split(s)?.length -1)%2 > 0;});
    return reducedText + markDownSymbolsOpened.join(" ") + "...";
 }

 function getImageName(imageName) {
    return path.join(__dirname, '..', 'images', imageName);
 }

module.exports = articleCtrl;