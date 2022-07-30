const DataTypes = require("sequelize");
const dbConnection = require("../configDB");
const AdwardsModel = dbConnection.define("awards", {
  id_tournament: {
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
  },
  award: {
    type: DataTypes.STRING,
  },
  type_award: {
    type: DataTypes.INTEGER,
  },
  state: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
});
module.exports = AdwardsModel;
