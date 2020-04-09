const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, ObjectId } = Schema.Types;

const ProductSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    branches: [{
        type: ObjectId,
        ref: 'Branch'
    }]

});

module.exports = new Model('Product', ProductSchema);