const mongoose = require('mongoose');

const databaseURI = 'mongodb://localhost/blog-database'

mongoose.connect(databaseURI)
.then(db => console.log('Database conected'))
.catch(e => console.error(err));