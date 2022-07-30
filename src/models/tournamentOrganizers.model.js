const DataTypes = require("sequelize");
const dbConnection = require("../configDB");
const TournamentOrganizersModel = dbConnection.define("tournament_organizers", {
  id_tournament: {
    type: DataTypes.INTEGER,
  },
  id_organizer: {
    type: DataTypes.INTEGER,
  },
  state: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
});
module.exports = TournamentOrganizersModel;
