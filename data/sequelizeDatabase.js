var Sequelize = require('sequelize');
var sequelize = new Sequelize('DATABASE', 'USER', 'PASSWORD', {
  host: 'HOST',
  dialect: 'DIALECT',
  port: 'PORT'
});
module.exports = sequelize;
