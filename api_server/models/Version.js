const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, ObjectId } = Schema.Types;

const VersionSchema = new Schema({
    number: {
        type: String,
        require: true
    },
    branch: {
        type: ObjectId,
        ref: 'Branch'
    },
    product: {
        type: ObjectId,
        ref: 'Product'
    }

});

module.exports = new Model('Version', VersionSchema);