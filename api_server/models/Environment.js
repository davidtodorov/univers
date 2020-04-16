const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, ObjectId } = Schema.Types;

const EnvironmentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    branch: {
        type: ObjectId,
        ref: 'Branch'
    },
    version: {
        type: ObjectId,
        ref: 'Version'
    },
    webAddress: [{
        type: ObjectId,
        ref: 'WebAddress'
    }],
    product: {
        type: ObjectId,
        ref: 'Product'
    },

});

module.exports = new Model('Envrionment', EnvironmentSchema);