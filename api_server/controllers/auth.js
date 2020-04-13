const models = require('../models');
const utils = require('../utils');
const config = require('../config/config');

module.exports = {
    get: (req, res) => {
        const token = req.cookies[config.authCookieName];
        utils.jwt.verifyToken(token)
            .then(({ id }) => models.User.findById(id).populate('editingHistory'))
            .then(user => {
                let userWithoutPass = JSON.parse(JSON.stringify(user));
                delete userWithoutPass.password;
                return res.send(userWithoutPass);
            })
            .catch(() => res.status(401).send('Hello pal. You are trying to do UNAUTHORIZED action!\nCheck your credentials and try again.'));
    }
}