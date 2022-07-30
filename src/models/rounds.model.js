const DataTypes = require("sequelize");
const dbConnection = require("../configDB");
const RoundsModel = dbConnection.define("rounds", {
  id_type_tournament: {
    type: DataTypes.INTEGER,
  },
  date: {
    type: DataTypes.DATE,
  },
  name: {
    type: DataTypes.STRING,
  },
  number: {
    type: DataTypes.INTEGER,
  },
  best_of: {
    type: DataTypes.INTEGER,
  },
  state: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
});
module.exports = RoundsModel;
