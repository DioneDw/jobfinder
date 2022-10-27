const Sequelize = new require('sequelize');
const db = require('../db/connection');

const Job = db.define('job', {
  title: {
    type: Sequelize.TEXT
  },
  description: {
    type: Sequelize.TEXT
  },
  salary: {
    type: Sequelize.TEXT
  },
  company: {
    type: Sequelize.TEXT,
  },
  email: {
    type: Sequelize.TEXT,
  },
  newjob:{
   type: Sequelize.INTEGER
  }
});

module.exports = Job