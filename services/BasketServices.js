const { BasketModel, BasketProductModel, ProductModel } = require('../models/_models.js');
// const checkBasket = require('../helpers/checkBasket.js');
// const findProductAndUpdate = require('../helpers/findProductAndUpdate.js');
const ProductServices = require('./ProductServices.js');


class BasketServices { // update clear basket

    async getBasket(user_id) {

        const basket = await BasketModel.findOne({ where: { user_id } });

        if(basket === null) {
            const newBasket = await BasketModel.create({ products_array: [], user_id});
            return newBasket;
        }
        return basket;
        
    };

    async addBasket(user_id, product_id) { // array(product_id)

        let usersBasket = await BasketModel.findOne({ where: { user_id }})

        if(usersBasket) {
            const { id, products_array } = usersBasket;

            let product = await ProductModel.findOne({ where: { id: product_id } });
            let { count } = product;

            if(count>0 && count !== 0) {

                await ProductModel.update( { count: count-1 }, { where: { id: product_id } });

            } else throw new Error('This products count is empty...');

            products_array.push(product_id); 

            await BasketModel.update({ products_array }, { where: { id }});

            await BasketProductModel.create({ basket_id: id, product_id });

            const result = await BasketModel.findOne({ where: { id }});
            return result;

        } else {

            const basket = await BasketModel.create({ products_array: [product_id], user_id });
            return basket;

        };
            
    };


    async clearBasket(user_id, just_clear) { // have to add product_id which will clear in basket

        if(just_clear) {
            const { id } = await BasketModel.findOne({ where: { user_id }});
            const deletedBasketId = await BasketModel.update({ products_array: [], user_id }, { where: { id }});
            return { deletedBasketId };
        }

        const basket = await BasketModel.findOne({ where: { user_id }});

        const { id, products_array } = basket;

        Promise.all(
            products_array.map(async id => {
                return ProductModel.increment('count', { where: { id }}); // edit 'increment' to 'udpate'
            })
        )

        const deletedBasketId = await BasketModel.update({ products_array: [] }, { where: { id } });
        return { deletedBasketId };

    };

};

module.exports = new BasketServices();