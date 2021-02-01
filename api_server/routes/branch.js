const controllers = require('../controllers');
const router = require('express').Router();
const { auth } = require('../utils');

router.get('/', auth(), controllers.branch.get);

router.get('/:id', auth(), controllers.branch.get);

router.post('/', auth(), controllers.branch.post);

router.put('/:id', auth(), controllers.branch.put);

router.delete('/:id', auth(), controllers.branch.delete);

module.exports = router;