const db = require('../config/db.js');
const Sequelize = require('sequelize');
const Product = require('./Product.js');
const User = require('./User.js');

const PaymentInfo = db.define(
    'peyment_info',
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
            require: true
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
        payment_method: {
            type: Sequelize.STRING,
            allowNull: false,
            require: true
        },
        delivery_method: {
            type: Sequelize.STRING,
            allowNull: false,
            require: true
        },
        order_status: {
            type: Sequelize.STRING,
            allowNull: false
        },
        product_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Product,
                key: 'id'
            }
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

module.exports = PaymentInfo