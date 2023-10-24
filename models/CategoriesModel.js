const db = require('../config/db.js');
const Sequelize = require('sequelize');

const CategoriesModel = db.define(
    'category',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        category_name: {
            type: Sequelize.STRING,
            allowNull: false,
            require: true
        }
    }
);

module.exports = CategoriesModel;