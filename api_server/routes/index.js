const user = require('./user');
const tutorial = require('./tutorial');
const product = require('./product');
const branch = require('./branch');
const version = require('./version');
const release = require('./release');
const auth = require('./auth');

module.exports = {
    user,
    auth,
    tutorial,
    product,
    branch,
    version,
    release
};