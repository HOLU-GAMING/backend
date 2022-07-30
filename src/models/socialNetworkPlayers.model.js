const DataTypes = require("sequelize");
const dbConnection = require("../configDB");
const SocialNetworkPlayersModel = dbConnection.define("social_network_players", {
  id_player: {
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
module.exports = SocialNetworkPlayersModel;
