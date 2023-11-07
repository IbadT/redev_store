const { OrderHistoryModel, BasketModel, PaymentInfoModel, ProductModel } = require('../models/_models.js');
const count_price = require('../helpers/count_price.js');

class OrderHistoryServices { // done

    async getOrderHistory(user_id) {
            
        const orderHistory = await OrderHistoryModel.findAll({ where: { user_id }})
        return orderHistory;

    };

    async addOrderHistory(user_id, payment_info_id) {

        const { products_array } = await PaymentInfoModel.findOne({ where: { id: payment_info_id }});
        return await Promise.all(
            products_array.map(async id => {
                const product = await ProductModel.findOne({ where: { id }});
                const createdOrderHistory = await OrderHistoryModel.create({ payment_info_id, product_id: product.id, price: product.price, user_id });
                return createdOrderHistory;
            })
        );

    };

    async deleteOrderHistory(user_id) {
            
        const deletedResult = await OrderHistoryModel.destroy({ where: { user_id }})
        return deletedResult;

    };

};

module.exports = new OrderHistoryServices();