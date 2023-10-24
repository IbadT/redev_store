const { BasketModel } = require('../models/_models.js');

async function checkBasket(user_id) {
    return new Promise((res, rej) => {
        BasketModel.findOne({ where: { user_id }}).then(basket => {
            console.log(basket);
            if(!basket) {
                BasketModel.create({products_array: [], user_id }).then(basket => {
                    const { id, products_array } = basket;
                    res({ id, products_array });
                });
            } res(basket)
        })
    })
};

module.exports = checkBasket;