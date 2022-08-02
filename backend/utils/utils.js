function showSchemaError(mySchema) {
    let response = "";
    mySchema.schema.eachPath((path) => response = `${response}, ${path}`);
    return {'status': 'response.common.required', 'params': response};
}

module.exports.showSchemaError = showSchemaError;