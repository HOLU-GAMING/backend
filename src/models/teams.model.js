const DataTypes = require("sequelize");
const dbConnection = require("../configDB");
const TeamsModel = dbConnection.define("teams", {
  name: {
    type: DataTypes.INTEGER,
  },
  fundation_date: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
  image_team: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
});
module.exports = TeamsModel;
