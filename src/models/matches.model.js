const DataTypes = require("sequelize");
const dbConnection = require("../configDB");
const MatchesModel = dbConnection.define("rules", {
  id_tournament: {
    type: DataTypes.INTEGER,
  },
  id_round: {
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
  },
  time: {
    type: DataTypes.TIME,
  },
  state: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
});
module.exports = MatchesModel;
