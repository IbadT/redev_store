const db = require('../config/db.js');
const Sequelize = require('sequelize');
const User = require('./User.js');

const OrderHistory = db.define(
    'order_history',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: false,
            allowNull: false,
            autoIncrement: true
        },
        order_name: {
            type: Sequelize.STRING,
            allowNull: false,
            require: true
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false,
            require: true
        },
        delivery: {
            type: Sequelize.STRING,
            allowNull: false,
            require: true
        },
        delivery_status: {
            type: Sequelize.STRING,
            allowNull: false,
            require: true
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            require: true,
            references: {
                model: User,
                key: 'id'
            }
        }
    }
);

module.exports = OrderHistory;