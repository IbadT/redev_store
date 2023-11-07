const db = require('../config/db.js');
const Sequelize = require('sequelize');
const UserModel = require('./UserModel.js');
// const OrderStatusesModel = require('./OrderStatusesModel.js');
const PaymentInfoModel = require('./PaymentInfoModel.js');

const OrderHistoryModel = db.define(
    'order_history',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        price: {
            type: Sequelize.FLOAT,
            allowNull: false,
            require: true
        },
        // order_status_id: {
        //     type: Sequelize.INTEGER,
        //     allowNull: false,
        //     require: true,
        //     references: {
        //         model: OrderStatusesModel,
        //         key: 'id'
        //     }
        // },
        payment_info_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            require: true,
            references: {
                model: PaymentInfoModel,
                key: 'id'
            }
        },
        product_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            require: true
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

module.exports = OrderHistoryModel;