const db = require('../config/db.js');
const Sequelize = require('sequelize');
const OwnerInfoModel = require('./OwnerInfoModel.js');
const CategoriesModel = require('./CategoriesModel.js');

const ProductModel = db.define(
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
        color: {
            type: Sequelize.STRING,
            allowNull: false,
            requrie: true
        },
        price: {
            type: Sequelize.FLOAT,
            allowNull: false,
            require: true
        },
        category_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            require: true,
            references: {
                model: CategoriesModel,
                key: 'id'
            }
        },
        owner_info_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            require: true,
            references: {
                model: OwnerInfoModel,
                key: 'id'
            }
        }
    }
);

module.exports = ProductModel;