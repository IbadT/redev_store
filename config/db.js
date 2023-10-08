const Sequelize = require('sequelize');

const db = new Sequelize(
    'redev_store',
    'postgres',
    'admin',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);

module.exports = db;