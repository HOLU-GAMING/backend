const DataTypes = require("sequelize");
const dbConnection = require("../configDB");
const RulesModel = dbConnection.define("rules", {
  id_tournament: {
    type: DataTypes.INTEGER,
  },
  rule: {
    type: DataTypes.STRING,
  },
  type_rule: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
});
module.exports = RulesModel;
