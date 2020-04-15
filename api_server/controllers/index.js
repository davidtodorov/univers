const user = require('./user');
const tutorial = require('./tutorial');
const product = require('./product');
const branch = require('./branch'); 
const version = require('./version'); 
const auth = require('./auth');

module.exports = {
  user,
  auth,
  tutorial,
  branch,
  product,
  version
};