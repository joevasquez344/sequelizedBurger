const Sequelize = require('sequelize');
const db = new Sequelize('burgers_db', 'root', 'root', {
    dialect: 'mysql'
})

module.exports = db;