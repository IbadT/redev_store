const { Requisites } = require('../models/Requisites.js');

class RequisitesServices {
    async getCards(id) {
        return new Promise((res, rej) => {
            Requisites.findAll({ where: { user_id: id }}).then(cards => {
                res(cards);
            });
        });
    };

    async addCard(id, body) {
        return new Promise((res, rej) => {
            Requisites.create(id, body).then(addedCard => {
                res(addedCard);
            })
        });
    };

    async deleteCard(id, cardId) {
        return new Promise((res, rej) => {
            Requisites.delete({where : { user_id: id, id: cardId }}).then(deleteResult => {
                res(deleteResult);
            })
        })
    }
};

module.exports = new RequisitesServices();