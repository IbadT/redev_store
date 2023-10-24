const db = require('../config/db.js');
const Sequelize = require('sequelize');

const UserModel = db.define(
    'user',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        login: {
            type: Sequelize.STRING,
            allowNull: false,
            require: true,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            require: true
        }
    }
);

module.exports = UserModel;