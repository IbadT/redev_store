const { OrderHistoryModel, BasketModel } = require('../models/_models.js');
const count_price = require('../helpers/count_price.js');

class OrderHistoryServices {

    async getOrderHistory(user_id) {
        return new Promise((res, rej) => {
            OrderHistoryModel.findAll({ where: { user_id }}).then(orderHistory => {
                res(orderHistory);
            });
        });
    };

    async addOrderHistory(user_id, body) {
        return new Promise((res, rej) => {
            const { basket_id } = body;
            BasketModel.findOne({ where: { id: basket_id }}).then(async basket => {
                const total_price = (await count_price(basket)).toFixed(2);
                return OrderHistoryModel.create({ basket_id, total_price, user_id }).then(createdOrderHistory => {
                    res(createdOrderHistory);
                })
            })

        })
    };

    async deleteOrderHistory(user_id) {
        return new Promise((res, rej) => {
            OrderHistoryModel.destroy({ where: { user_id }}).then(deletedResult => {
                res(deletedResult)
            });
        });
    };

};

module.exports = new OrderHistoryServices();