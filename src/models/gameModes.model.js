const DataTypes = require("sequelize");
const dbConnection = require("../configDB");
const GameModesModel = dbConnection.define("game_modes", {
  id_game: {
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
});
module.exports = GameModesModel;
