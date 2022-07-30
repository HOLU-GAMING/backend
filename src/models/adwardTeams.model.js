const DataTypes = require("sequelize");
const dbConnection = require("../configDB");
const AdwardTeamsModel = dbConnection.define("award_teams", {
  id_award: {
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
module.exports = AdwardTeamsModel;
