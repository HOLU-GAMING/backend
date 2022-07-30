const DataTypes = require("sequelize");
const dbConnection = require("../configDB");
const TypeTournamentsModel = dbConnection.define("type_tournaments", {
  name: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
});
module.exports = TypeTournamentsModel;
