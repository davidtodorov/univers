const models = require('../models');

module.exports = {
  get: (req, res, next) => {

    const { id } = req.query;
    models.Product.find(id ? { _id: id } : {}).populate('admins')
      .then(products => {

        res.send(id ? products[0] : products)
      }).catch(err => {
        console.log(err.response.data);
        next();
      });
  },

  post: (req, res, next) => {
    console.log(req.params);
    const { name, description } = req.body;
    const { _id } = req.user;

    models.Product
      .create({ name, description, creator: _id })
      .then(createdProduct => {
        res.send(createdProduct);
      })
      .catch(next);
  },

  put: (req, res, next) => {
    const { id, name, description, admins } = req.body;
    models.Product.updateOne({ _id: id}, { name, description, admins}).then((updatedProdcut) => {
      console.log(updatedProdcut);
      res.send(updatedProdcut);
    }).catch(err => {
      next();
    })
    // const { technology, name, content } = req.body;

    // const { _id } = req.user;
    // const { id } = req.params;

    // models.Tutorial.updateOne({ _id: id }, { technology, name, content })
    //   .then((updatedTutorial) => {
    //     console.log(updatedTutorial)
    //     return Promise.all([
    //       models.User.updateOne({ _id }, { $push: { editingHistory: updatedTutorial._id } }),
    //       models.Tutorial.findOne({ _id: updatedTutorial._id })
    //     ])
    //   })
    //   .then(([modifiedObj, tutorialObj]) => {
    //     res.send(tutorialObj);
    //   })
    //   .catch(next)
  },

  delete: (req, res, next) => {
    const id = req.query.id;
    const { id: userId } = req.user;
    models.Product.findOne({ _id: id }).populate('creator').populate('admins').then(product => {
      if (product.creator.id === userId || product.admins.find(a => a.id === userId)) {
        models.Product.deleteOne({ _id: product.id }).then(() => {
          res.send(product)
        }).catch(next)
      }
    })
  }
};