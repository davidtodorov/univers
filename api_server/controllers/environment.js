const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        const { id } = req.query;
        const { productId } = req.query;
        models.Environment.find(productId ? { product: productId } : id ? { _id: id } : {}).populate('version').populate('branch')
            .then(environments => {
                res.send(environments)
            }).catch(err => {
                console.log(err);
                next();
            });
    },
    post: (req, res, next) => {
        const { name, description, branchId, versionId, productId } = req.body;
        models.Environment
            .create({ name, description, branch: branchId, version: versionId, product: productId })
            .then(createdProduct => {
                models.Environment.find({ _id: createdProduct.id }).populate('version').populate('branch')
                    .then(environments => {
                        res.send(environments)
                    })
            })
            .catch(next);
    },

    put: (req, res, next) => {
        // const { id, name, description, admins } = req.body;
        // models.Product.updateOne({ _id: id }, { name, description, admins }).then((updatedProdcut) => {
        //     console.log(updatedProdcut);
        //     res.send(updatedProdcut);
        // }).catch(err => {
        //     next();
        // })

    },

    delete: (req, res, next) => {
        const id = req.query.id;
        models.Environment.deleteOne({ _id: id}).then(deletedEnv => {
            res.send(deletedEnv);
        }).catch(next)
    }
};