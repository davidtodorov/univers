const models = require('../models');

module.exports = {
  get: (req, res, next) => {

    const { id } = req.params;
    models.Product.find(id ? { _id: id } : {})
      .then(products => {
        res.send(products)
      }).catch(next);
    // if (technology) {
    //   models.Tutorial.find({ technology }).populate('editor')
    //     .then((tutorials) => res.send(tutorials))
    //     .catch(next);
    //   return;
    // }
    // models.Tutorial.find(id ? { _id: id } : {}).populate('editor')
    //   .then((tutorials) => res.send(tutorials))
    //   .catch(next);
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
    // const { technology, name, content } = req.body;
    // const { _id } = req.user;

    // models.Tutorial.create({ editor: _id, technology, name, content })
    //   .then((createdTutorial) => {
    //     return Promise.all([
    //       models.User.updateOne({ _id }, { $push: { editingHistory: createdTutorial._id } }),
    //       models.Tutorial.findOne({ _id: createdTutorial._id })
    //     ]);
    //   })
    //   .then(([modifiedObj, tutorialObj]) => {
    //     res.send(tutorialObj);
    //   })
    //   .catch(next);
  },

  put: (req, res, next) => {
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

    // const id = req.params.id;

    // models.Tutorial.deleteOne({ _id: id })
    //   .then((removedTutorial) => res.send(removedTutorial))
    //   .catch(next)
  }
};