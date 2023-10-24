const Sentry = require('@sentry/node');
const BasketServices = require('../services/BasketServices.js');
// const { validationResult } = require('express-validator');


class BasketControllers {

    async getBasket(req, res) {
        try {
            // validationResult(req).throw();
            const { id } = req.userId;
            const basket = await BasketServices.getBasket(id);
            res.send(basket);
        } catch (error) {
            Sentry.captureException(error);
            res.json({error: error.message});
        };
    };

    async addBasket(req, res) {
        try {
            // validationResult(req).throw();
            const { id } = req.userId;
            const { product_id } = req.params;
            const addedBasket = await BasketServices.addBasket(id, product_id);
            res.send(addedBasket);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        };
    };

    async deleteBasket(req, res) {
        try {
            // validationResult(req).throw();
            const { id } = req.userId;
            const deleteResult = await BasketServices.clearBasket(id);
            res.send(deleteResult);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        };
    }    ;


};

module.exports = new BasketControllers();