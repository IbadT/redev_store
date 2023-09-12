const db = require('../config/db.js');
const Sequelize = require('sequelize');
const UserInfo = require('./UserInfo.js');
const User = require('./User.js');

const OwnerInfo = db.defind(
    'owner_info',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        user_info_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            require: true,
            references: {
                model: UserInfo,
                key: 'id'
            }
        },
        organization: {
            type: Sequelize.INTEGER,
            allowNull: false,
            require: true
        },
        accaunt_number: {
            type: Sequelize.INTEGER, // !!!!!!
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
                model: User,
                key: 'id'
            }
        }
    }
);

module.exports = OwnerInfo;