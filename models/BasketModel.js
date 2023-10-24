const db = require('../config/db.js');
const Sequelize = require('sequelize');
const UserModel = require('./UserModel.js');

const BasketModel = db.define(
    'basket',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        products_array: {
            type: Sequelize.ARRAY(Sequelize.INTEGER),
            allowNull: false,
            require: true
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

module.exports = BasketModel;