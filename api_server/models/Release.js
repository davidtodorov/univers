const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, ObjectId } = Schema.Types;

const ReleaseSchema = new Schema({
    releaseNumber: {
        type: String,
        require: true
    },
    versionNumber: {
        type: ObjectId,
        require: true
    },
    released: {
        type: Boolean
    },
    releasedDate: {
        type: Date,
        require: true
    },
    branch: {
        type: ObjectId,
        ref: 'Branch'
    }

});

module.exports = new Model('Release', ReleaseSchema);