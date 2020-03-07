const mongoose = require('mongoose');
const Project = require('../Content/project').projectSchema;
const Schema = mongoose.Schema;

const fundRaiserSchema = new Schema({
    aboutMe: {
        type: String,
    },
    address: {
        type: String,
    },
    projects: {
        type: [Project]
    }
});
const FundraiserModel = mongoose.model('Fundraiser', fundRaiserSchema);
module.exports = {
    FundraiserModel,
    fundRaiserSchema
};