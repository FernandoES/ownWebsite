const User = require('../models/user');
const utils = require('../utils/utils');
const bcrypt = require('bcrypt');

const userCtrl = {};
userCtrl.createAccount = async (req,res) => {
    if (!req.body.password || !req.body.user) {
        res.status(400).json({'status': 'Password or user not delivered'});
    }
    else {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({userMail: req.body.userMail, userName: req.body.userName, password: hashedPassword});
        try {
            await user.save();
            res.json({
                'status': 'Account created'
            })
        }
        catch (e){
            res.status(400).json(utils.showSchemaError(User));
        }
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
                await User.findByIdAndUpdate(user._id, { password: hashedNewPassword });
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
    return await User.findOne({userMail: userMail});
}

userCtrl.getEmployeeById = async (id) => {
    return await User.findById(id);
}

module.exports = userCtrl;