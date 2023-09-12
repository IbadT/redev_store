const db = require('../config/db.js');
const Sequelize = require('sequelize');

const Requisites = db.define(
    'requisite',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        card_number: {
            type: Sequelize.INTEGER,
            allowNull: false,
            require: true,
            unique: true
        },
        card_date: {
            type: Sequelize.STRING,
            allowNull: false,
            require: true
        },
        cvv: {
            type: Sequelize.INTEGER,
            allowNull: false,
            require: true
        }
    }
);

module.exports = Requisites;