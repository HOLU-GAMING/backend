const DataTypes = require("sequelize");
const dbConnection = require("../configDB");
const PlayerTeamTournamentsModel = dbConnection.define("rules", {
  id_player: {
    type: DataTypes.INTEGER,
  },
  id_tournament_team: {
    type: DataTypes.INTEGER,
  },
  type_player: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
});
module.exports = PlayerTeamTournamentsModel;
