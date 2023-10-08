const { OrderHistory } = require('../models/_models.js');

class OrderHistoryServices {

    async getOrderHistory(id) {
        return new Promise((res, rej) => {
            OrderHistory.findAll({ where: { user_id: id }}).then(orderHistory => {
                res(orderHistory);
            })
        })
    }
    async addOrderHistory(body) {
        return new Promise((res, rej) => {
            OrderHistory.create(body).then(createdOrderHistory => {
                res(createdOrderHistory);
            })
        })
    }
    async deleteOrderHistory(id) {
        return new Promise((res, rej) => {
            OrderHistory.destroy({ where: { user_id: id }}).then(deletedResult => {
                res(deletedResult)
            })
        })
    }    
};

module.exports = new OrderHistoryServices();