const { ProductModel } = require('../models/_models.js');
const ProductServices = require('../services/ProductServices.js');

async function findProductAndUpdate(id) {
    return async function() {
        let product = await ProductServices.getProductById(id);
        let updatedProduct = await ProductModel.update({count: product.count+1}, { where: { id: product.id }});
    }
};

module.exports = findProductAndUpdate;