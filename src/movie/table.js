const { DataTypes } = require("sequelize");
const { openSequelizeConnection } = require("../db/connection");

const Movie = openSequelizeConnection.define("Movie2", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  actor: {
    type: DataTypes.STRING,
    defaultValue: "Not specified",
  },
  director: {
    type: DataTypes.STRING,
    defaultValue: "Not specified",
  },
  rating: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Movie;
