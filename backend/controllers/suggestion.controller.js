const Suggestion = require('../models/suggestion');
const utils = require('../utils/utils');

const suggestionCtrl = {};
suggestionCtrl.saveSuggestion = async (req, res) => {
    try {
        const suggestion = new Suggestion({...req.body, date: new Date() });
        await suggestion.save();
        res.json({
            'status': 'suggestion saved'
        })
        return;
    }
    catch (e){
        res.status(400).json({'status': utils.showSchemaError(Suggestion)})
    }
};

module.exports = suggestionCtrl;