const db = require('../config/db.js');
const Sequelize = require('sequelize');
const UserModel = require('./UserModel.js');

const RequisitesModel = db.define(
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
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: UserModel,
                key: 'id'
            }
        }
    }
);

module.exports = RequisitesModel;