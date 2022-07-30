const DataTypes = require("sequelize");
const dbConnection = require("../configDB");
const TypeGamesModel = dbConnection.define("type_games", {
  name: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
});
module.exports = TypeGamesModel;
