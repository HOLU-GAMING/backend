const DataTypes = require("sequelize");
const dbConnection = require("../configDB");
const PlayerGamesModel = dbConnection.define("player_games", {
  id_player: {
    type: DataTypes.INTEGER,
  },
  id_game: {
    type: DataTypes.INTEGER,
  },
  position: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
});
module.exports = PlayerGamesModel;
