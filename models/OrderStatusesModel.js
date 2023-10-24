const pgDb = require('../config/db.js');
const Sequelize = require('sequelize');

const OrdersStatuesModel = pgDb.define(
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

module.exports = OrdersStatuesModel;