/* eslint-disable no-debugger */
const models = require('../models');
const config = require('../config/config');
const utils = require('../utils');

module.exports = {
  get: (req, res, next) => {
    models.User.find()
      .then((users) => {
        let usersWithoutPass = [];
        if (users.length > 0) {
          usersWithoutPass = users.reduce((acc, val) => {
            let user = JSON.parse(JSON.stringify(val));
            delete user.password;
            acc.push(user);
            return acc;
          }, [])
        }
        res.send(usersWithoutPass)
      })
      .catch(next)
  },

  post: {
    register: (req, res, next) => {
      const { email, username, password } = req.body;

      models.User.create({ email, username, password })
        .then((createdUser) => {
          let user = JSON.parse(JSON.stringify(createdUser));
          delete user.password;
          return res.send(user);
        })
        .catch((err => {
          return res.status(500).send("The email is already registered!");
        }))
    },

    login: (req, res, next) => {
      const { email, password } = req.body;
      models.User.findOne({ email })
        .then(user => {
          return !!user ? Promise.all([user, user.matchPassword(password)]) : [null, false]
        })
        .then(([foundUser, match]) => {
          if (!match) {
            res.status(401).send('Invalid username or password!');
            return;
          }

          const token = utils.jwt.createToken({ id: foundUser._id });

          let user = JSON.parse(JSON.stringify(foundUser));
          delete user.password;

          res.cookie(config.authCookieName, token).send(user);
        })
        .catch(next);
    },

    logout: (req, res, next) => {
      const token = req.cookies[config.authCookieName];
      console.log('-'.repeat(100));
      console.log(token);
      console.log('-'.repeat(100));
      models.TokenBlacklist.create({ token })
        .then(() => {
          res.clearCookie(config.authCookieName).send({ logoutSuccess: true });
        })
        .catch(next);
    }
  },

  put: (req, res, next) => {
    const id = req.params.id;
    const { username, password } = req.body;
    models.User.update({ _id: id }, { username, password })
      .then((updatedUser) => res.send(updatedUser))
      .catch(next)
  },

  delete: (req, res, next) => {
    const id = req.params.id;
    models.User.deleteOne({ _id: id })
      .then((removedUser) => res.send(removedUser))
      .catch(next)
  }
};
