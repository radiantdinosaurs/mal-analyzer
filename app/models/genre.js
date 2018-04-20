var Sequelize = require('sequelize');
var sequelize = require('./sequelizeDatabase');

module.exports = sequelize.define('genre', {
  name: {
      type: Sequelize.STRING,
      unique: true,
      primaryKey: true,
      allowNull: false
  },
  jikan_id: {
      type: Sequelize.STRING,
      unique: true
  }
}, {
  timestamps: false,
  underscored: true,
  freezeTableName: true,
  tableName: 'genre'
});
