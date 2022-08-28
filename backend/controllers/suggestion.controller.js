const Suggestion = require('../models/suggestion');
const utils = require('../utils/utils');

const suggestionCtrl = {};
suggestionCtrl.saveSuggestion = async (req, res) => {
    try {
        const suggestion = new Suggestion({...req.body, date: new Date() });
        await suggestion.save();
        res.json({
            'status': 'response.suggestions.saved'
        })
        return;
    }
    catch (e){
        res.status(400).json(utils.showSchemaError(Suggestion))
    }
};

suggestionCtrl.getSuggestionList = async (req, res) => {
    try {
        const suggestions = await Suggestion.find();
        res.json(suggestions);
    }
    catch (e){
        res.status(400).json({ 'status': 'response.error.unknown' })
    }
}

module.exports = suggestionCtrl;