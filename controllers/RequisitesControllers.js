const Sentry = require('@sentry/node');
const RequisitesServices = require('../services/RequisitesServices.js');
const { validationResult } = require('express-validator');


class RequisitesControllers {

    async getCards(req, res) {
        try {
            // validationResult(req).throw();
            const { id } = req.userId;
            const cards = await RequisitesServices.getCards(id);
            if(cards.length > 0) {
                return res.send(cards);
            } throw new Error('Card doesn\'t added...');
        } catch (error) {
            Sentry.captureException(error);
            res.json(error.message);
        };
    };

    async addCard(req, res) {
        try {
            // validationResult(req).throw();
            const { id } = req.userId;
            const { body } = req;
            const addedCard = await RequisitesServices.addCard(id, body);
            res.send(addedCard);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        }
    };

    async deleteCard(req, res) {
        try {
            // validationResult(req).throw();
            const { id } = req.userId;
            const { cardId } = req.params;
            console.log(cardId);
            const deleteResult = await RequisitesServices.deleteCard(id, cardId);
            res.send({ result: deleteResult });
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        }
    }

};

module.exports = new RequisitesControllers();