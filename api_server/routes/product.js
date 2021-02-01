const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.product.get);

router.get('/:id', controllers.product.get);

router.post('/', auth(), controllers.product.post);

router.put('/', auth(), controllers.product.put);

router.delete('/', auth(), controllers.product.delete);

module.exports = router;