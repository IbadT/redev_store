const db = require('../config/db.js');
const Sequelize = require('sequelize');
const UserInfo = require('./UserInfo.js');
const OwnerInfo = require('./OwnerInfo.js');
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
        user_info_id: {
            type: Sequelize.INTEGER,
            allowNull: false, 
            require: true,
            references: {
                model: UserInfo,
                key: 'id'
            }
        },
        owner_info_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            require: true,
            references: {
                model: OwnerInfo,
                key: 'id'
            }
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