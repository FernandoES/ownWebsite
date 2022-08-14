const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const userCtrl = require('./controllers/login.controller');

function initialize(passport, getUserByEmail, getUserById) {
    const authenticateUser = async (userMail, password, done) => {
        const user = await getUserByEmail(userMail);
        if (user == null) {
            return done('no user with that email', false);
        }
        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user);
            }
            return done('Password incorrect', false);
        } catch (e) {
            return done(e)
        }

    }
    passport.use(new LocalStrategy({
        usernameField: 'userMail',
        passwordField: 'password'
    },
    authenticateUser))
    passport.serializeUser((user, done) => done(null,user._id))
    passport.deserializeUser((id, done) => done(null, getUserById(id)))
}
module.exports = initialize;