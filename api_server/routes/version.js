const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', auth(), controllers.version.get);

router.get('/:id', auth(), controllers.version.get);

router.post('/', auth(), controllers.version.post);

router.put('/:id', auth(), controllers.version.put);

router.delete('/:id', auth(), controllers.version.delete);

module.exports = router;