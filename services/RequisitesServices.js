const { RequisitesModel } = require('../models/_models.js');

class RequisitesServices {

    async getCards(user_id) {
        return new Promise(async (res, rej) => {

            const cards = await RequisitesModel.findAll({ where: { user_id }});
            res(cards);
        
        });
    };

    async addCard(user_id, body) {
        return new Promise(async (res, rej) => {

            const addedCard = await RequisitesModel.create({...body, user_id});
            res(addedCard);
        
        });
    };

    async deleteCard(user_id, id) {
        return new Promise(async (res, rej) => {
            
            const deleteResult = await RequisitesModel.destroy({ where : { id, user_id }});
            res(deleteResult);
        
        });
    };

};

module.exports = new RequisitesServices();