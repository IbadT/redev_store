const db = require('../config/db.js');
const Sequelize = require('sequelize');
// const ProductModel = require('./ProductModel.js');
const UserModel = require('./UserModel.js');
const PaymentMethodsModel = require('./PaymentMethodsModel.js');
const DeliveryMethodsModel = require('./DeliveryMethodsModel.js');
const OrderStatusesModel = require('./OrderStatusesModel.js');
const UserInfoModel = require('./UserInfoModel.js');
const BasketModel = require('./BasketModel.js');

const PaymentInfoModel = db.define(
    'payment_info',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        amount_of_payment: {
            type: Sequelize.FLOAT,
            allowNull: false,
            require: true,
        },
        order_date: {
            type: Sequelize.STRING,
            allowNull: false,
            require: true
        },
        purpose_of_payment: {
            type: Sequelize.STRING,
            allowNull: false,
            require: true
        },
        user_info_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            require: true,
            references: {
                model: UserInfoModel,
                key: 'id'
            }
        },
        payment_method_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            require: true,
            references: {
                model: PaymentMethodsModel,
                key: 'id'
            }
        },
        delivery_method_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            require: true,
            references: {
                model: DeliveryMethodsModel,
                key: 'id'
            }
        },
        order_status_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            require: true,
            references: {
                model: OrderStatusesModel,
                key: 'id'
            }
        },
        products_array: {
            type: Sequelize.ARRAY(Sequelize.INTEGER),
            allowNull: false,
            require: true,
        },
        basket_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            require: true,
            references: {
                model: BasketModel,
                key: 'id'
            }
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            require: true,
            references: {
                model: UserModel,
                key: 'id'
            }
        }
    }
);

module.exports = PaymentInfoModel;