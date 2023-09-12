const Sequelize = require('sequelize');

const db = new Sequelize(
    'reder_stor',
    'postgres',
    'admin',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);

module.exports = db;