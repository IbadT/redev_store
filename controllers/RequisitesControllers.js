const Sentry = require('@sentry/node');
const RequisitesServices = require('../services/RequisitesServices.js');

class RequisitesControllers {
    async getCards(req, res) {
        try {
            const cards = await RequisitesControllers.getCard(id);
            res.send(cards);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        };
    };

    async addCard(req, res) {
        try {
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
            const { id } = req.userId;
            const deleteResult = await RequisitesServices.deleteCard(id);
            res.send(deleteResult);
        } catch (error) {
            Sentry.captureException(error);
            res.json(error);
        }
    }
};

module.exports = new RequisitesControllers();