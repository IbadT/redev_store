const db = require('../config/db.js');
const Sequelize = require('sequelize');
const OwnerInfo = require('./OwnerInfo.js');

const Product = db.define(
    'product',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            require: true
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
            require: true
        },
        category: {
            type: Sequelize.STRING,
            allowNull: false,
            require: true
        },
        img: {
            type: Sequelize.STRING,
            allowNull: false,
            require: true
        },
        count: {
            type: Sequelize.INTEGER,
            allowNull: false,
            require: true
        },
        price: {
            type: Sequelize.FLOAT,
            allowNull: false,
            require: true
        },
        owner_info_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            require: true,
            references: {
                model: OwnerInfo,
                key: 'id'
            }
        }
    }
);

module.exports = Product;