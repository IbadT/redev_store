const { PaymentInfoModel, UserInfoModel, BasketModel, ProductModel } = require('../models/_models.js');
const BasketServices = require('./BasketServices.js');

class PaymentInfoServices { // done

    async getPaymentInfo(user_id) {

        const info = await PaymentInfoModel.findAll({ where: { user_id }});
        return info;
        
    };

    async addPaymentInfo(user_id, body, confirm) {
        if(confirm !== 'confirm') {
            throw new Error('You must enter the word "confirm" ')
        }

        const user_info = await UserInfoModel.findOne({ where: { user_id }});
        
        const basket = await BasketModel.findOne({ where: { user_id }});
        const { products_array } = basket;

        const price_array = await Promise.all(
            products_array.map(async id => {
                const { price } = await ProductModel.findOne({ where: { id }});
                return price;
            })
        )
            
        let amount_of_payment = await price_array.reduce((acc,cur) => acc + cur);

        const addedPaymentInfo = await PaymentInfoModel.create({
            ...body,
            amount_of_payment,
            products_array,
            user_info_id: user_info.id,
            user_id,
            basket_id: basket.id
        });
        
        const { id } = await BasketModel.findOne({ where: { user_id }});
        await BasketModel.update({ products_array: [], user_id }, { where: { id }});
        return addedPaymentInfo;
            
    };

};

module.exports = new PaymentInfoServices();