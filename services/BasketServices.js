const { BasketModel, BasketProductModel, ProductModel } = require('../models/_models.js');
// const checkBasket = require('../helpers/checkBasket.js');
// const findProductAndUpdate = require('../helpers/findProductAndUpdate.js');


class BasketServices {

    async getBasket(user_id) {
        return new Promise(async (res, rej) => {

            const products_in_basket = await BasketModel.findAll({ where: { user_id } })
            res(products_in_basket);
        
        }).catch(err => rej(err));
    };

    async addBasket(user_id, product_id) { // array(product_id)
        return new Promise(async (res, rej) => {

            // await BasketModel.findOne({ where: { user_id }}).then(async basket => {
            //     await ProductModel.findOne({ where: { id: product_id }}).then(async product => {
            //         const { count } = product;
            //         console.log(count);
            //         if(count > 0) {
            //             await ProductModel.update({ count: count-1 }, { where: { id: product_id }});
            //             await ProductModel.findOne({where: { id: product_id}}).then(data => res(data));
            //         }
            //     });
            // });





            let usersBasket = await BasketModel.findOne({ where: { user_id }})

            if(usersBasket) {
                const { id, products_array } = usersBasket;

                let product = await ProductModel.findOne({ where: { id: product_id } });
                let { count } = product;
                // const newProduct = {...product, count: product.count-1};

                // await ProductModel.update( { count: count-1 }, { where: { id: product_id } });
                if(count>0 && count !== 0) {

                    await ProductModel.update( { count: count-1 }, { where: { id: product_id } });

                } else throw new Error('This products count is empty...');



                            
                products_array.push(product_id); 

                await BasketModel.update({ products_array }, { where: { id }});

                await BasketProductModel.create({ basket_id: id, product_id });

                const result = await BasketModel.findOne({ where: { id }});
                return res(result);

            } else {

                const basket = await BasketModel.create({ products_array: [product_id], user_id });
                res(basket);

            };
            
        }).catch(err => rej(err));
    };

    async clearBasket(user_id) { // have to add product_id which will clear in basket
        return new Promise(async (res, rej) => {

            const basket = await BasketModel.findOne({ where: { user_id }});

            const { id, products_array } = basket;

            const prom = products_array.map(async (id) => {
                const { count } = await ProductModel.findOne({ where: { id }});
                return await ProductModel.update({ count: count+1 }, { where: { id }});
            });
   
            await Promise.all(prom)
                .then(result => console.log(result))
                .catch(err => console.error(err));

            const deletedBasketId = await BasketModel.update({ products_array: [], user_id }, { where: { id } });
            res({ deletedBasketId });

        })
    };
    
};

module.exports = new BasketServices();