const { OrderHistoryModel, PaymentInfoModel, ProductModel, OrderStatusesModel, DeliveryMethodsModel, PaymentMethodsModel } = require('../models/_models.js');


class OrderHistoryServices { // done

    async getOrderStatus(payment_info_id) {

        const { order_status_id, 
            delivery_method_id, 
            payment_method_id 
        } = await PaymentInfoModel.findOne({ where: { id: payment_info_id }});

        const { status } = await OrderStatusesModel.findOne({ where: { id: order_status_id }});
        const { method: delivery_method } = await DeliveryMethodsModel.findOne({ where: { id: delivery_method_id}});
        const { method: payment_method } = await PaymentMethodsModel.findOne({ where: { id: payment_method_id }});

        return { status, delivery_method, payment_method };

    }

    async getOrderHistory(user_id) {
            
        const orderHistories = await OrderHistoryModel.findAll({ where: { user_id }})
        return orderHistories;

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

    async updateStatus(payment_info_id) {

        const { order_status_id } = await PaymentInfoModel.findOne({ where: { id: payment_info_id }});
        if( order_status_id === 7 ) {
            const { status } = await OrderStatusesModel.findOne({ where: { id: 7 }}); 
            return status;
        }
        await PaymentInfoModel.update({ order_status_id: order_status_id+1 }, { where: { id: payment_info_id }})
        const updPay = await PaymentInfoModel.findOne({ where: { id: payment_info_id }});
        return updPay;

    }

    async deleteOrderHistory(user_id) {
            
        const deletedResult = await OrderHistoryModel.destroy({ where: { user_id }})
        return deletedResult;

    };

};

module.exports = new OrderHistoryServices();