const { RequisitesModel } = require('../models/_models.js');

class RequisitesServices { // done

    async getCards(user_id) {

        const cards = await RequisitesModel.findAll({ where: { user_id }});
        return cards;
        
    };

    async addCard(user_id, body) {

        const addedCard = await RequisitesModel.create({...body, user_id});
        return addedCard;
        
    };

    async deleteCard(user_id, id) {
            
        const deleteResult = await RequisitesModel.destroy({ where : { id, user_id }});
        return deleteResult;
        
    };

};

module.exports = new RequisitesServices();