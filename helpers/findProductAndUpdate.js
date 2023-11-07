const { ProductModel } = require('../models/_models.js');
const ProductServices = require('../services/ProductServices.js');

async function findProductAndUpdate(id, products_array) {

    let { count } = await ProductServices.getProductById(id)
    await Promise.all(
        products_array.map(async product => {
            // const 
        })
    )

};

module.exports = findProductAndUpdate;