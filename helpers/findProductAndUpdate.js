const { ProductModel } = require('../models/_models.js');

async function findProductAndUpdate(id) {

    const product = await ProductModel.findOne({ where: { id }});

    if(product) {

        let { count } = product;
        console.log(product);
        let promis = product.map(async (i) => {
            const result = await ProductModel.update( { count: i.count+1 }, { where: { id }} );
            return result;
        });
        Promise.all(promis);
        console.log('update ', result)

    }
    return false;
};

module.exports = findProductAndUpdate;