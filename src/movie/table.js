const { DataTypes } = require("sequelize");
const { openSequelizeConnection } = require("../db/connection");

//*MOVIE TABLE:
const Movie = openSequelizeConnection.define("Movie2", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  actor_id: {
    type: DataTypes.INTEGER,

    // defaultValue: "Not specified",
  },
  director: {
    type: DataTypes.STRING,
    // defaultValue: "Not specified",
  },
  rating: {
    type: DataTypes.INTEGER,
  },
});

//*ACTOR TABLE:
const Actor = openSequelizeConnection.define(
  "Actor",
  {
    actor: {
      type: DataTypes.STRING,
    },
    actor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { initialAutoIncrement: 50 }
);

// Movie.belongsToMany(Actor, { through: "ActorMovies" });
// Actor.belongsToMany(Movie, { through: "ActorMovies" });

// //*DIRECTOR TABLE:
// const Director = openSequelizeConnection.define("Director", {
//   director: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   title: {
//     type: DataTypes.STRING,
//     defaultValue: "No Movies",
//   },
//   Age: {
//     type: DataTypes.INTEGER,
//     allowNull: true,
//   },
//   movie_count: {
//     type: DataTypes.INTEGER,
//     allowNull: true,
//   },
// });
// Director.hasMany(Movie);
// Movie.belongsTo(Director, { through: "directorMovies" });
module.exports = { Movie, Actor };
