const db = require('../config/db.js');
const Sequelize = require('sequelize');
const UserModel = require('./UserModel.js');

const OwnerInfoModel = db.define(
    'owner_info',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        organization: {
            type: Sequelize.STRING,
            allowNull: false,
            require: true
        },
        accaunt_number: {
            type: Sequelize.INTEGER, 
            allowNull: false,
            require: true
        },
        inn: {
            type: Sequelize.INTEGER,
            allowNull: false,
            require: true,
            unique: true
        },
        bik: {
            type: Sequelize.INTEGER,
            allowNull: false,
            require: true,
            unique: true
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

module.exports = OwnerInfoModel;