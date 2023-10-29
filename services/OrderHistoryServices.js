const { OrderHistoryModel, BasketModel } = require('../models/_models.js');
const count_price = require('../helpers/count_price.js');

class OrderHistoryServices {

    async getOrderHistory(user_id) {
        return new Promise(async (res, rej) => {
            
            const orderHistory = await OrderHistoryModel.findAll({ where: { user_id }})
            res(orderHistory);

        });
    };

    async addOrderHistory(user_id, body) {
        return new Promise(async (res, rej) => {

            const { basket_id } = body;
            const basket = await BasketModel.findOne({ where: { id: basket_id }});

            const total_price = (await count_price(basket)).toFixed(2);

            const createdOrderHistory = await OrderHistoryModel.create({ basket_id, total_price, user_id })
            res(createdOrderHistory);

        })
    };

    async deleteOrderHistory(user_id) {
        return new Promise(async (res, rej) => {
            
            const deletedResult = await OrderHistoryModel.destroy({ where: { user_id }})
            res(deletedResult);

        });
    };

};

module.exports = new OrderHistoryServices();