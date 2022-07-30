const DataTypes = require("sequelize");
const dbConnection = require("../configDB");
const TeamTournamentsModel = dbConnection.define("team_tournaments", {
  id_team: {
    type: DataTypes.INTEGER,
  },
  id_tournament: {
    type: DataTypes.INTEGER,
  },
  score: {
    type: DataTypes.INTEGER,
  },
  state: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
});
module.exports = TeamTournamentsModel;
