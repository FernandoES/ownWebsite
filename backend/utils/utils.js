function showSchemaError(mySchema) {
    let response = "";
    mySchema.schema.eachPath((path) => response = `${response}, ${path}`);
    return "The following values are required:" + response;
}

module.exports.showSchemaError = showSchemaError;