const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.environment.get);

router.get('/:id', controllers.environment.get);

router.post('/', auth(), controllers.environment.post);

router.put('/', auth(), controllers.environment.put);

router.delete('/', auth(), controllers.environment.delete);

module.exports = router;