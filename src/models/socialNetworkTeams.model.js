const DataTypes = require("sequelize");
const dbConnection = require("../configDB");
const SocialNetworkTeamsModel = dbConnection.define("social_network_teams", {
  id_team: {
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
  },
  url: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
});
module.exports = SocialNetworkTeamsModel;
