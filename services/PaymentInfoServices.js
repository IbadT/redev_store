const { PaymentInfo } = require('../models/_models.js');

class PaymentInfoServices {

    async getPaymentInfo(id) {
        return new Promise((res, rej) => {
            PaymentInfo.findAll({ where: { user_id: id }}).then(info => {
                res(info);
            })
        });
    };

    async addPaymentInfo(id, body) {
        return new Promise((res, rej) => {
            PaymentInfo.create(body).then(addedPaymentInfo => {
                res(addedPaymentInfo);
            })
        });
    };

};

module.exports = new PaymentInfoServices();