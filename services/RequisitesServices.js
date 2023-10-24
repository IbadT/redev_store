const { RequisitesModel } = require('../models/_models.js');

class RequisitesServices {

    async getCards(user_id) {
        return new Promise((res, rej) => {
            RequisitesModel.findAll({ where: { user_id }}).then(cards => {
                res(cards);
            });
        });
    };

    async addCard(user_id, body) {
        return new Promise((res, rej) => {
            RequisitesModel.create({...body, user_id}).then(addedCard => {
                res(addedCard);
            })
        });
    };

    async deleteCard(user_id, id) {
        return new Promise((res, rej) => {
            RequisitesModel.destroy({ where : { id, user_id }}).then(deleteResult => {
                res(deleteResult);
            });
        });
    };

};

module.exports = new RequisitesServices();