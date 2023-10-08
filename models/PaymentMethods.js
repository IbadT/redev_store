const db = require('../config/db.js');
const Sequelize = require('sequelize');

const PaymentMethods = db.define(
    'payment_method',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        method: {
            type: Sequelize.STRING,
            allowNull: false,
            require: true
        }
    }
);

module.exports = PaymentMethods;