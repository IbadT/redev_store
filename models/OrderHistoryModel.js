const db = require('../config/db.js');
const Sequelize = require('sequelize');
const UserModel = require('./UserModel.js');
const OrderStatusesModel = require('./OrderStatusesModel.js');
const BasketModel = require('./BasketModel.js');

const OrderHistoryModel = db.define(
    'order_history',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        total_price: {
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

module.exports = OrderHistoryModel;