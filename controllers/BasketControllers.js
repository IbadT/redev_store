const Sentry = require('@sentry/node');
const BasketServices = require('../services/BasketServices.js');

class BasketControllers {

    async getBasket(req, res) {
        try {
            const { id } = req.userId;
            const basket = await BasketServices.getBasket(id);
            res.send(basket);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        };
    };

    async addBasket(req, res) {
        try {
            const { id } = req.userId;
            const { body } = req;
            const addedBasket = await BasketServices.addBasket(id, body);
            res.send(addedBasket);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        };
    };

    async deleteBasket(req, res) {
        try {
            const { id } = req.userId;
            const deleteResult = await BasketServices.deleteBasket(id);
            res.send(deleteResult);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        };
    }    ;


};

module.exports = new BasketControllers();