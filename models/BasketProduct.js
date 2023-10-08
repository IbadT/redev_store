const pgDb = require('../config/db.js');
const Sequelize = require('sequelize');
const Basket = require('./Basket.js');
const Product = require('./Product.js');

const BasketProduct = pgDb.define(
    'basket_product',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        basket_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Basket,
                key: 'id'
            }
        },
        product_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Product,
                key: 'id'
            }
        }
    }
);

module.exports = new BasketProduct();