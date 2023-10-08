const Sentry = require('@sentry/node');
const OrderHistoryServices = require('../services/OrderHistoryServices.js');

class OrderHistoryControllers {

    async getOrderHistory(req, res) {
        try {
            const { id } = req.userId;
            const orderHistory = await OrderHistoryServices.getOrderHistory(id);
            res.send(orderHistory);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        }
    };

    async addOrderHistory(req, res) {
        try {
            const { body } = req;
            const createdOrderHistory = await OrderHistoryServices.addOrderHistory(body);
            res.send(createdOrderHistory);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        }
    };

    async deleteOrderHistory(req, res) {
        try {
            const { id } = req.userId;
            const deletedResult = await OrderHistoryServices.deleteOrderHistory(id);
            res.send(deletedResult);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        }
    };

};

module.exports = new OrderHistoryControllers();