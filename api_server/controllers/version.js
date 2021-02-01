const models = require('../models');

module.exports = {
    get: (req, res, next) => {

        const { productId }  = req.query;
        const { branchId }  = req.query;
        models.Version.find(productId ? { product: productId } : branchId ? { branch: branchId } : {})
            .then(versions => {
                res.send(versions)
            }).catch(err => {
                console.log(err.response.data);
                next();
            });
    },

    post: (req, res, next) => {
        console.log(req.params);
        const { versionNumber, branchId, productId } = req.body;

        models.Version
            .create({ number: versionNumber, branch: branchId, product: productId })
            .then(createdVersion => {
                res.send(createdVersion);
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