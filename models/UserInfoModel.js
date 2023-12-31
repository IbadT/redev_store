const db = require('../config/db.js');
const Sequelize = require('sequelize');
const UserModel = require('./UserModel.js');

const UserInfoModel = db.define(
    'user_info',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        first_name: {
            type: Sequelize.STRING,
            allowNull: false,
            require: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            require: true
        },
        last_name: {
            type: Sequelize.STRING,
            allowNull: false,
            require: true
        },
        adress: {
            type: Sequelize.STRING,
            allowNull: false,
            require: true
        },
        phone_number: {
            type: Sequelize.STRING,
            allowNull: false,
            require: true
        },
        email: {
            type: Sequelize.STRING,
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

module.exports = UserInfoModel;