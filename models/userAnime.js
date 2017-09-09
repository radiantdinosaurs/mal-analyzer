var Sequelize = require('sequelize');
var sequelize = require('../data/sequelizeDatabase');

module.exports = sequelize.define('user_anime', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    fk_anime_id_user_anime: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    fk_user_id_user_anime: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    my_watched_episodes: Sequelize.INTEGER,
    my_start_date: Sequelize.DATE,
    my_finish_date: Sequelize.DATE,
    my_score: Sequelize.INTEGER,
    my_status: Sequelize.INTEGER,
    my_rewatching: Sequelize.INTEGER,
    my_rewatching_episodes: Sequelize.INTEGER
}, {
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    tableName: 'user_anime'
});