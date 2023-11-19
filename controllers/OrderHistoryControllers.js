const Sentry = require('@sentry/node');
const OrderHistoryServices = require('../services/OrderHistoryServices.js');
// const { validationResult } = require('express-validator');


class OrderHistoryControllers {

    async getOrderStatus(req, res) {
        try {
            const { payment_info_id } = req.params;
            const status = await OrderHistoryServices.getOrderStatus(payment_info_id);
            res.send(status);
        } catch (error) {
            res.json(error);
        }
    }

    async getOrderHistory(req, res) {
        try {
            // validationResult(req).throw();
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
            // validationResult(req).throw();
            const { id } = req.userId;
            const { payment_info_id } = req.params;
            const createdOrderHistory = await OrderHistoryServices.addOrderHistory(id, payment_info_id);
            res.send(createdOrderHistory);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        }
    };

    async updateStatus(req, res) {
        try {
            const { payment_info_id } = req.query;
            const updatedPaymentInfo = await OrderHistoryServices.updateStatus(payment_info_id);
            res.send(updatedPaymentInfo);
        } catch (error) {
            res.json(error);
        }
    }

    async deleteOrderHistory(req, res) {
        try {
            // validationResult(req).throw();
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