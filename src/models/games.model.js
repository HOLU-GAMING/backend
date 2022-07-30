const DataTypes = require("sequelize");
const dbConnection = require("../configDB");
const GamesModel = dbConnection.define("games", {
  name: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
});
module.exports = GamesModel;
