const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('fanta-prova', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
