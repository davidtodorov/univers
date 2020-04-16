const models = require('../models');

module.exports = {
    get: (req, res, next) => {

        const { productId } = req.query;
        models.Branch.find({ product: productId }).populate('currentVersion').populate('versions')
            .then(branches => {
                res.send(branches)
            }).catch(err => {
                console.log(err.response.data);
                next();
            });
    },

    post: (req, res, next) => {
        console.log(req.params);
        const { name, description, currentVersionId, productId } =  req.body;

        models.Branch
            .create({ name, description, currentVersion: currentVersionId, product: productId })
            .then(createdProduct => {
                res.send(createdProduct);
            })
            .catch(next);
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

        const id = req.params.id;

        models.Tutorial.deleteOne({ _id: id })
            .then((removedTutorial) => res.send(removedTutorial))
            .catch(next)
    }
};