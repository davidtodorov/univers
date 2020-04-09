const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, ObjectId } = Schema.Types;

const BranchSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    canRealse: {
        type: Boolean
    },
    currentVersion: {
        type: ObjectId,
        ref: 'Version'
    },
    product: {
        type: ObjectId,
        ref: 'Product'
    },
    environments: [{
        type: ObjectId,
        ref: 'Environment'
    }]

});

module.exports = new Model('Branch', BranchSchema);