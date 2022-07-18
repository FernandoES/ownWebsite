const express = require('express');
const router = express.Router();
const passport = require('passport');
const userCtrl = require('../controllers/login.controller');

const auth = () => {
  return (req, res, next) => {
      passport.authenticate('local', (error, user) => {
          if(error) {
            res.status(400).json({"statusCode" : 200 ,"message" : error});
          }
          else {
            req.login(user, function(err) {
              if (err) {
                return next(err);
              }
              next();
          });
        }
      })(req, res, next);
  }
}

router.post('/login', auth() , (req, res) => {
  res.status(200).json({"statusCode" : 200 ,"message" : "loggedIn"});
});

router.post('/createAccount', userCtrl.createAccount);
router.post('/restorePassword', userCtrl.restorePassword);

module.exports = router;