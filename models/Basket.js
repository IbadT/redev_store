const db = require('../config/db.js');
const Sequelize = require('sequelize');
const User = require('./User.js');
const Product = require('./Product.js');

const Basket = db.define(
    'basket',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            require: true,
            references: {
                model: User,
                key: 'id'
            }
        },
        product_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            require: true,
            references: {
                model: Product,
                key: 'id'
            }
        }
    }
);

module.exports = Basket;