const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', controllers.release.get);

router.get('/:id', controllers.release.get);

router.post('/', auth(), controllers.release.post);

router.put('/', auth(), controllers.release.put);

router.delete('/', auth(), controllers.release.delete);

module.exports = router;