const pgDb = require('../config/db.js');
const Sequelize = require('sequelize');

const DeliveryMethods = pgDb.define(
    'delivery_methods',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        method: {
            type: Sequelize.STRING,
            allowNull: false,
            require: true
        }
    }
);

module.exports = DeliveryMethods;