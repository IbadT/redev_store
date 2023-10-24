const { ProductModel } = require('../models/_models.js');

async function count_price(basket) {
    const { products_array } = basket;
    let total_price = 0;
    for(let id of products_array) {
        await ProductModel.findOne({ where: { id }}).then(product => {
            const { price } = product;
            total_price += price;
        });
    };
    return total_price;
};  

module.exports = count_price;