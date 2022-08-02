const express = require('express');
const { mongoose } = require('./database');
const bcrypt = require('bcrypt');
const app = express();
const passport = require('passport');
const session = require('express-session');
const flash = require('express-flash');
const APIPrefix = 'api';
const userCtrl = require('./controllers/login.controller');
const initializePassport = require('./passport-config');
initializePassport(passport,
    (userMail) => userCtrl.getEmployeeByUserMail(userMail),
    (id) => userCtrl.getEmployeeById(id))
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET ?? 'secret',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(function (req,res,next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(flash());
app.use(`/${APIPrefix}/login`, require('./routes/login.routes'));
app.use(`/${APIPrefix}/articles`, require('./routes/articles.routes'));
app.use(`/${APIPrefix}/suggestions`, require('./routes/suggestion.routes'));
    

app.listen(app.get('port'), () => {
    console.log("server on port " + app.get('port'));
});