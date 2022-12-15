const { Movie, Director, Actor } = require("./table");
const yargs = require("yargs");

exports.createMovie = async (movieObj) => {
  try {
    // const actorExists = await Actor.findAll({
    //   where: { actor: movieObj.actor },
    // });
    // console.log(actorExists);
    const newMovie = await Movie.create(movieObj);
    console.log(newMovie);
  } catch (error) {
    console.log(error);
  }
};

exports.readMovie = async () => {
  try {
    const showMovies = await Movie.findAll();
    console.log(showMovies);
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
