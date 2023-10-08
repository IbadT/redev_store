const { Basket } = require('../models/_models.js');

class BasketServices {

    async getBasket(id) {
        return new Promise((res, rej) => {
            Basket.findAll({ where: { user_id: id }}).then(basket => {
                res(basket);
            });
        });
    };

    async addBasket(body) {
        return new Promise((res, rej) => {
            Basket.create(body).then(createdBasket => {
                res(createdBasket);
            })
        });
    };

    async deleteBasket(id) {
        return new Promise((res, rej) => {
            Basket.destroy({ where: { user_id: id }}).then(deleteResult => {
                res(deleteResult);
            })
        });
    };
    
};

module.exports = new BasketServices();