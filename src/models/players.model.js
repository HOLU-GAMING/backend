const DataTypes = require("sequelize");
const dbConnection = require("../configDB");
const PlayersModel = dbConnection.define("players", {
  dni: {
    type: DataTypes.INTEGER,
  },
  first_name: {
    type: DataTypes.STRING,
  },
  last_name: {
    type: DataTypes.STRING,
  },
  nick_name: {
    type: DataTypes.STRING,
  },
  date_birth: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
  phone_number: {
    type: DataTypes.INTEGER,
  },
  email: {
    type: DataTypes.STRING,
  },
  nationality: {
    type: DataTypes.STRING,
  },
  points: {
    type: DataTypes.INTEGER,
    defaultValue: 2000
  },
  gender: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.STRING,
    defaultValue: 1
  },
  password: {
    type: DataTypes.STRING,
  },
  tk_notification: {
    type: DataTypes.STRING,
  },
});
module.exports = PlayersModel;
