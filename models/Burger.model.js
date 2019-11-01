const db = require('../config/connection');
const Sequelize = require('sequelize');

const Burger = db.define('burger', {
    name: {
        type: Sequelize.STRING
    },
    isDevoured: {
        type: Sequelize.STRING,
        default: false
    }
})

module.exports = Burger;