const DataTypes = require("sequelize");
const dbConnection = require("../configDB");
const GameTypeGamesModel = dbConnection.define("game_type_games", {
  id_game: {
    type: DataTypes.INTEGER,
  },
  id_type_game: {
    type: DataTypes.INTEGER,
  },
  state: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
});
module.exports = GameTypeGamesModel;
