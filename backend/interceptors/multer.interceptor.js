const multer = require('multer');

const folderName = "images";

const imageFileFilter = (req,file,callBack) => {
    if(!file.mimetype.startsWith("image/")) {
        req.fileValidationError = 'response.error.onlyImages';
        return callBack(null, false, new Error('response.error.onlyImages'));
    }
    callBack(null, true);
};

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, folderName);
    },
    filename: function (req, file, callback) {
        callback(null, Date.now() + "_" + file.originalname);
    },
  });
  const upload = multer({ storage: storage, fileFilter: imageFileFilter });

  
module.exports = upload;