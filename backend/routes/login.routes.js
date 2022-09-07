const express = require('express');
const router = express.Router();
const passport = require('passport');
const userCtrl = require('../controllers/login.controller');
const utils = require('../utils/utils');

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

router.post('/login', auth() , userCtrl.login);

router.post('/createAccount', userCtrl.createAccount);
router.post('/restorePassword', userCtrl.restorePassword);
router.get('/isLogged', userCtrl.checkIfLogged);
router.get('/accountPetitions', utils.checkAuthenticated, userCtrl.getAccountPetitions);
router.post('/accountPetitions/reject', utils.checkAuthenticated, userCtrl.rejectAccountPetition);
router.post('/accountPetitions/accept', utils.checkAuthenticated, userCtrl.acceptAccountPetition);
router.delete('/logout',utils.checkAuthenticated, userCtrl.logout);

module.exports = router;