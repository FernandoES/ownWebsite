function showSchemaError(mySchema) {
    let response = "";
    mySchema.schema.eachPath((path) => response = `${response}, ${path}`);
    return {'status': 'response.common.required', 'params': response};
}

function checkAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    return null;
}

module.exports.showSchemaError = showSchemaError;
module.exports.checkAuthenticated = checkAuthenticated;