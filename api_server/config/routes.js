const router = require('../routes/');

module.exports = (app) => {

    app.use('/api/auth', router.auth);

    app.use('/api/user', router.user);

    app.use('/api/tutorials', router.tutorial);

    app.use('/api/products', router.product);

    app.use('/api/branches', router.branch);

    app.use('/api/versions', router.version);

    app.use('*', (req, res, next) => res.send('<h1> Wrong route maybe? </h1>'));
};