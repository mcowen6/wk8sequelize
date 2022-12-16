const { Movie, Director, Actor } = require("./table");
const yargs = require("yargs");
const { openSequelizeConnection } = require("../db/connection");

exports.createMovie = async (movieObj) => {
  try {
    const actorExists = await Actor.findAll({
      where: { actor: movieObj.actor },
    });
    if (actorExists.length === 0) {
      const result = await Actor.create({ actor: movieObj.actor });
      console.log(result.dataValues.actor_id);
      const newMovie = await Movie.create({
        title: movieObj.title,
        actor_id: result.dataValues.actor_id,
        director: movieObj.director,
        rating: movieObj.rating,
      });
      console.log(newMovie);
      // await Movie.create(movieObj);
    } else {
      const result = await Actor.findAll({ where: { actor: movieObj.actor } });
      console.log(result, "this is the result");
      const newMovie = await Movie.create({
        title: movieObj.title,
        actor_id: result[0].dataValues.actor_id,
        director: movieObj.director,
        rating: movieObj.rating,
      });
      const movieOutput = await openSequelizeConnection.query(
        "select Movie2s.title, director, rating, actor, age from Movie2s, Actors where Movie2s.actor_id = Actors.actor_id"
      );
      for (i = 0; i < movieOutput[0].length; i++) {
        const row = movieOutput[0][i];
        console.log(row.title, row.director, row.actor, row.rating, row.age);
      }
    }
    // console.log(actorExists, "Actor exists");
  } catch (error) {
    console.log(error);
  }
};

exports.readMovie = async () => {
  try {
    const movieOutput = await openSequelizeConnection.query(
      "select Movie2s.title, director, rating, actor, age from Movie2s, Actors where Movie2s.actor_id = Actors.actor_id"
    );
    for (i = 0; i < movieOutput[0].length; i++) {
      const row = movieOutput[0][i];
      console.log(row.title, row.director, row.actor, row.rating, row.age);
    }
  } catch (error) {
    console.log(error);
  }
};

// exports.updateMovie = async (yargsInput) => {
//   try {
//     const updateMovie = await Movie.update(
//       {
//         actor: yargsInput.actor,
//       },
//       {
//         where: {
//           title: yargsInput.title,
//         },
//       }
//     );
//     console.log(updateMovie);
//   } catch (error) {
//     console.log(error);
//   }
// };

//Actor table:
exports.createActor = async (actorObj) => {
  try {
    const createActor = await Actor.create(actorObj);
    console.log(createActor);
  } catch (error) {
    console.log(error);
  }
};

exports.readActor = async () => {
  try {
    const showActors = await Actor.findAll();
    console.log(showActors);
  } catch (error) {
    console.log(error);
  }
};
//Director table:
