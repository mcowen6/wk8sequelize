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

const Actor = openSequelizeConnection.define("Actor", {
  actor: {
    type: DataTypes.STRING,
  },
});
Movie.belongsToMany(Actor, { through: "ActorMovies" });
Actor.belongsToMany(Movie, { through: "ActorMovies" });

const Director = openSequelizeConnection.define("Director", {
  director: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  title: {
    type: DataTypes.STRING,
    defaultValue: "No Movies",
  },
  Age: {
    type: DataTypes.INTEGER,
  },
  movie_count: {
    type: DataTypes.INTEGER,
  },
});
Movie.hasOne(Director);
Director.belongsToMany(Movie, { through: "directorMovies" });
module.exports = { Movie, Director, Actor };
