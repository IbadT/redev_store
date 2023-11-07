const Sentry = require('@sentry/node');
const PaymentInfoServices = require('../services/PaymentInfoServices.js');
// const { validationResult } = require('express-validator');


class PaymentInfoControllers {

    async getPaymentInfo(req, res) {
        try {
            // validationResult(req).throw();
            const { id } = req.userId;
            const paymentInfo = await PaymentInfoServices.getPaymentInfo(id);
            res.send(paymentInfo);
        } catch (error) {
            res.json(error);
            Sentry.captureException(error);
        };
    };

    async addPaymentInfo(req, res) {
        try {
            // validationResult(req).throw();
            const { id } = req.userId;
            const { body } = req;
            const addedPaymentInfo = await PaymentInfoServices.addPaymentInfo(id, body);
            res.send(addedPaymentInfo);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        };
    };

};

module.exports = new PaymentInfoControllers();