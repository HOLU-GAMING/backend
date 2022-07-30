const DataTypes = require("sequelize");
const dbConnection = require("../configDB");
const GuestsModel = dbConnection.define("guests", {
  id_player: {
    type: DataTypes.INTEGER,
  },
  id_team: {
    type: DataTypes.INTEGER,
  },
  id_guest: {
    type: DataTypes.INTEGER,
  },
  confirmation: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
});
module.exports = GuestsModel;
