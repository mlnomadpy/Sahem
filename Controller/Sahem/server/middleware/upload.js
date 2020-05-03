import util from 'util';
import multer from 'multer';
import GridFsStorage from "multer-gridfs-storage";
const url = process.env.DB_URL;
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    }
});
// const storage = new GridFsStorage({
//     url: 'mongodb://localhost/sahem',
//     // options: { useNewUrlParser: true, useUnifiedTopology: true },
//     file: (req, file) => {
//         const match = ["image/png", "image/jpeg"];

//         if (match.indexOf(file.mimetype) === -1) {
//             const filename = `${Date.now()}-sahem-${file.originalname}`;
//             return filename;
//         }

//         return {
//             bucketName: "photos",
//             filename: `${Date.now()}-sahem-${file.originalname}`
//         };
//     }
// });

const upload = multer({ storage: storage });

// const uploadFilesMiddleware = util.promisify(upload);
module.exports = {
    upload
};