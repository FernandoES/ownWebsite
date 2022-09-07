const User = require('../models/user');
const utils = require('../utils/utils');
const bcrypt = require('bcrypt');

const userCtrl = {};
userCtrl.createAccount = async (req,res) => {
    if (!req.body.password || !req.body.userName || !req.body.userMail) {
        res.status(400).json({'status': 'Password or user not delivered'});
    }
    else {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const numberOfExistingAccounts = await User.user.count();
        if (numberOfExistingAccounts) {
            saveUser(req.body.userMail, req.body.userName, hashedPassword, User.accountCreationPetitions, 'response.login.account.petitioned', res);
        }
        else {
            saveUser(req.body.userMail, req.body.userName, hashedPassword, User.user, 'response.login.account.created', res);
        }
    }
}

saveUser = async (userMail, userName, hashedNewPassword, db, successStatus, res) => {
    const user = new db({userMail: userMail, userName: userName, password: hashedNewPassword});
            try {
                await user.save();
                res.json({
                    'status': successStatus
                })
            }
            catch (e){
                res.status(400).json(utils.showSchemaError(db));
            }
}

userCtrl.restorePassword = async (req,res) => {
    if (!req.body.userMail || !req.body.oldPassword || !req.body.newPassword){
        res.status(400).json({'status': 'userMail, oldPassword and newPassword in body required'});
    }
    else {
        const user = await userCtrl.getEmployeeByUserMail(req.body.userMail);
        if (!user) {
            res.status(400).json({'status': 'No user with that mail found'});
        }
        try {
            if (await bcrypt.compare(req.body.oldPassword, user.password)) {
                const hashedNewPassword = await bcrypt.hash(req.body.newPassword, 10);
                await User.user.findByIdAndUpdate(user._id, { password: hashedNewPassword });
                res.json({'status': 'User password changed properly'});
                return;
            }
            res.json({'status': 'Wrong password'});
            return;
        } catch (e) {
            res.status(400).json({'status': 'Something went wrong'});
            return e;
        }
    }
}

userCtrl.login = async (req, res) => {
    const user = await req.user;
    res.status(200).json({"statusCode" : 200 ,"message" : "response.login.success.logged", 
    params: {userMail: user.userMail, userName: user.userName } });
  }

  userCtrl.checkIfLogged = async (req, res) => {
      if(req.user) {
        const user = await req.user;
        res.json({ logged: true, 'userMail': user.userMail, 'userName': user.userName });
        return;
    }
    res.json({logged: false});
  }

userCtrl.getEmployeeByUserMail = async (userMail) => {
    return await User.user.findOne({userMail: userMail});
}

userCtrl.getEmployeeById = async (id) => {
    return await User.user.findById(id);
}

userCtrl.logout = async (req,res, next) => {
    req.logout((e) => {
        if (e) {return next(e);}
    })
    res.json({'status': 'account.loggedOut'})
}

userCtrl.getAccountPetitions = async(req, res) => {
    const petitions = await User.accountCreationPetitions.find();
    res.json({'accountPetitions': petitions.map(p => ({userName: p.userName, userMail: p.userMail, _id: p._id}))});
}

userCtrl.rejectAccountPetition = async(req, res) => {
        if(!req.body.petitionId) {
            res.status(400).json({'error': 'response.petition.error.noId'});
            return;
        }
        User.accountCreationPetitions.findByIdAndDelete(req.body.petitionId, function (err, petition) {
            if(err) {
                res.status(400).json({'error': err});
                return;
            }
            res.json({'status': 'response.petition.success.deleted' })
        });
}

userCtrl.acceptAccountPetition = async(req, res) => {
    try {
        if(!req.body.petitionId) {
            res.status(400).json({'error': 'response.petition.error.noId'});
            return;
        }
        const petition = await User.accountCreationPetitions.findById(req.body.petitionId);
        saveUser(petition.userMail, petition.userName, petition.password, User.user, 'response.login.account.created', res);
        User.accountCreationPetitions.findByIdAndDelete(petition._id);
        return;
    }
    catch (e) {
        res.status(400).json({'error': e});
    }

}

module.exports = userCtrl;