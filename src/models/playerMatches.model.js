const DataTypes = require("sequelize");
const dbConnection = require("../configDB");
const PlayerMatchesModel = dbConnection.define("player_matches", {
  id_player: {
    type: DataTypes.INTEGER,
  },
  id_match: {
    type: DataTypes.INTEGER,
  },
  state: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
});
module.exports = PlayerMatchesModel;
