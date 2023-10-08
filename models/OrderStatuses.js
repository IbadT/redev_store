const pgDb = require('../config/db.js');
const Sequelize = require('sequelize');

const OrdersStatues = pgDb.define(
    'order_status',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        status: {
            type: Sequelize.STRING,
            allowNull: false,
            require: true
        }
    }
);

module.exports = OrdersStatues;