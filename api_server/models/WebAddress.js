const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String } = Schema.Types;

const WebAddressSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    },
    server: {
        type: String,
        require: true
    },
    dbName: {
        type: String,
        require: true
    }

});

module.exports = new Model('WebAddress', WebAddressSchema);