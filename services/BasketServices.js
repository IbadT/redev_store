const { BasketModel, BasketProductModel, ProductModel } = require('../models/_models.js');
const checkBasket = require('../helpers/checkBasket.js');
const findProductAndUpdate = require('../helpers/findProductAndUpdate.js');
const { Op } = require('sequelize');

class BasketServices {

    async getBasket(user_id) {
        return new Promise((res, rej) => {
            // BasketModel.findAll({ attributes: { exclude: ['basket_id']}}).then(products_in_basket => {
            BasketModel.findAll({ where: { user_id } }).then(products_in_basket => {
                res(products_in_basket);
            }).catch(err => rej(err));
        });
    };

    async addBasket(user_id, product_id) { // array(product_id)
        return new Promise((res, rej) => {

                BasketModel.findOne({ where: { user_id }}).then(async basket => {
                    if(basket) {
                        const { id, products_array } = basket;
                        
                        await ProductModel.findOne({ where: { id: product_id } }).then(async product => {
                            let { count } = product;
                            if(count>0) {
                                return await ProductModel.update( { ...product, count: count-1 }, { where: { id: product_id } })
                            } 
                            throw new Error('This products count is empty...');
                        });
                        
                        products_array.push(product_id); 
                        await BasketModel.update({ products_array, user_id }, { where: { id }})
                            // .then(result => console.log('Basket update result ', result));

                        await BasketProductModel.create({ basket_id: id, product_id })
                            // .then(basketmodel => console.log('basket model create ', basketmodel)); 

                        
                        return await BasketModel.findOne({ where: { id }}).then(result => res(result));

                    } else {

                        return BasketModel.create({ products_array: [product_id], user_id }).then(basket => {
                            // console.log('basket model created ', basket);
                            res(basket);
                        });

                    };
                }).catch(err => rej(err));
        });
    };

    async clearBasket(user_id) { // have to add product_id which will clear in basket
        return new Promise((res, rej) => {
            BasketModel.findOne({ where: { user_id }}).then(async basket => {
                const { id, products_array } = basket;
                products_array.forEach(async (id) => findProductAndUpdate(id));
                await BasketModel.update({ products_array: [], user_id }, { where: { id } })
                    .then(() => {
                        console.log('BasketProduct was deleted');
                        return res({ id });
                    });
            }).catch(err => rej(err));
        });
    };
    
};

module.exports = new BasketServices();