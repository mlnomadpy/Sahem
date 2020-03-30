import { Creator } from '../app_api/models/User/Creator';
/**
 * This function get the creator associated with the user id 
 * that we got after authenticating with passport 
 * @param {Http request} req holds the user id in req.user._id
 * @param {Http response} res 
 */
const getCreator = (req, res, next) => {
    const userId = req.user._id;
    const ObjectId = require('mongoose').Types.ObjectId;
    Creator
        .findOne({ user_id: userId })
        .exec((err, creator) => {
            //if(err) error creator not created yet
            if (err) {
                return res
                    .status(400)
                    .json({
                        'message': 'you didn\'t create your profile yet'
                    });
            }
           

            if (!creator) {
                return res
                    .status(404)
                    .json({
                        'message': 'creator doesn\'t exist'
                    });
            }
            req.creator = creator;
            next();
        });

};
module.exports = {
    getCreator
}