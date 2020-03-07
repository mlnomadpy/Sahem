const mongoose = require('mongoose');
const Fundraiser = require('../User/fundraiser').fundRaiserSchema;
//Project schema
const Schema = mongoose.Schema;
const projectSchema = new Schema({
    owner: {
        type: Fundraiser,
        // required: true
    },
    content: {
        type: String,
        // required: true
    },
    description: {
        type: String,
        // required: true
    },
    fundGoal: {
        type: Number,
        // required: true
    },
    fundRaised: {
        type: Number,
        default: 0
    },
    createdDate: {
        type: Date,
        default: Date.now()
    },
    endDate: {
        type: Date,
        // required: true  
    },
    fundraisers: {
        type: [Fundraiser],
        default: null
    }

});
const ProjectModel = mongoose.model("Project", projectSchema);
module.exports = {
    ProjectModel,
    projectSchema
};