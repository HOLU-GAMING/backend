const DataTypes = require("sequelize");
const dbConnection = require("../configDB");
const TeamsModel = dbConnection.define("teams", {
  name: {
    type: DataTypes.INTEGER,
  },
  fundation_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: DataTypes.NOW
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
