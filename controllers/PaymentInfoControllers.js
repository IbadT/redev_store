const Sentry = require('@sentry/node');
const PaymentInfoServices = require('../services/PaymentInfoServices.js');

class PaymentInfoControllers {

    async getPaymentInfo(req, res) {
        try {
            const { id } = req.userId;
            const paymentInfo = await PaymentInfoServices.getPaymentInfo(id);
            res.send(paymentInfo);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        };
    };

    async addPaymentInfo(req, res) {
        try {
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