const DataTypes = require("sequelize");
const dbConnection = require("../configDB");
const PlayerTeamsModel = dbConnection.define("player_teams", {
  id_player: {
    type: DataTypes.INTEGER,
  },
  id_team: {
    type: DataTypes.INTEGER,
  },
  state: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
});
module.exports = PlayerTeamsModel;
