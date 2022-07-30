const DataTypes = require("sequelize");
const dbConnection = require("../configDB");
const TournamentsModel = dbConnection.define("tournament", {
  id_game: {
    type: DataTypes.INTEGER,
  },
  id_type_tournament: {
    type: DataTypes.INTEGER,
  },
  initDay: {
    type: DataTypes.DATE,
  },
  endDay: {
    type: DataTypes.DATE,
  },
  initRegister: {
    type: DataTypes.DATE,
  },
  endRegister: {
    type: DataTypes.DATE,
  },
  cant_players_team: {
    type: DataTypes.INTEGER,
  },
  state: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
});
module.exports = TournamentsModel;
