const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db/app.sqlite'
});

module.exports = sequelize;