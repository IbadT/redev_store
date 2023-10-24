const pgDb = require('../config/db.js');
const Sequelize = require('sequelize');
const BasketModel = require('./BasketModel.js');
const ProductModel = require('./ProductModel.js');

const BasketProductModel = pgDb.define(
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
                model: BasketModel,
                key: 'id'
            }
        },
        product_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: ProductModel,
                key: 'id'
            }
        }
    }
);

module.exports = BasketProductModel;