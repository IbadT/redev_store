const { PaymentInfoModel, UserInfoModel, BasketModel } = require('../models/_models.js');

class PaymentInfoServices {

    async getPaymentInfo(user_id) {
        return new Promise(async (res, rej) => {

            const info = await PaymentInfoModel.findAll({ where: { user_id }})
            res(info);
        
        });
    };

    async addPaymentInfo(user_id, body) {
        return new Promise(async (res, rej) => {

            const user_info = await UserInfoModel.findOne({ where: { user_id }});

            const { id } = user_info;
            const obj = {...body, user_info_id: id, user_id };

            const addedPaymentInfo = await PaymentInfoModel.create(obj)
            res(addedPaymentInfo);
            
        });
    };

};

module.exports = new PaymentInfoServices();