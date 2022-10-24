const DataTypes = require("sequelize");
const dbConnection = require("../configDB");
const TournamentsModel = dbConnection.define("tournament", {
  id_game: {
    type: DataTypes.INTEGER,
  },
  id_type_tournament: {
    type: DataTypes.INTEGER,
  },
  id_player:{
    type: DataTypes.INTEGER,
  },
  name:{
    type: DataTypes.STRING,
  },
  init_day: {
    type: DataTypes.DATE,
  },
  end_day: {
    type: DataTypes.DATE,
  },
  price:{
    type: DataTypes.DOUBLE,
  },
  init_register: {
    type: DataTypes.DATE,
  },
  end_register: {
    type: DataTypes.DATE,
  },
  cant_players_team: {
    type: DataTypes.INTEGER,
  },
  cant_replacements: {
    type: DataTypes.INTEGER,
  },
  state: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
});
module.exports = TournamentsModel;
