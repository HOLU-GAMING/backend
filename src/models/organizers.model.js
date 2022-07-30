const DataTypes = require("sequelize");
const dbConnection = require("../configDB");
const OrganizersModel = dbConnection.define("organizers", {
  name: {
    type: DataTypes.STRING,
  },
  phone_contact: {
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
module.exports = OrganizersModel;
