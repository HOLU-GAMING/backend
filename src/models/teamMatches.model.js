const DataTypes = require("sequelize");
const dbConnection = require("../configDB");
const TeamMatchesModel = dbConnection.define("team_matches", {
  id_team: {
    type: DataTypes.INTEGER,
  },
  id_match: {
    type: DataTypes.INTEGER,
  },
  id_organizers: {
    type: DataTypes.INTEGER,
  },
  result: {
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
module.exports = TeamMatchesModel;
