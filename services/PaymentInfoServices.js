const { PaymentInfoModel, UserInfoModel, BasketModel } = require('../models/_models.js');

class PaymentInfoServices {

    async getPaymentInfo(user_id) {
        return new Promise((res, rej) => {
            PaymentInfoModel.findAll({ where: { user_id }}).then(info => {
                res(info);
            });
        });
    };

    async addPaymentInfo(user_id, body) {
        return new Promise((res, rej) => {
            UserInfoModel.findOne({ where: { user_id }}).then(user_info => {
                const { id } = user_info;
                const obj = {...body, user_info_id: id, user_id }
                return PaymentInfoModel.create(obj).then(addedPaymentInfo => {
                    res(addedPaymentInfo);
                });
            });
        });
    };

};

module.exports = new PaymentInfoServices();