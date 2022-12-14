const Movie = require("./table");
const yargs = require("yargs");

exports.createMovie = async (movieObj) => {
  try {
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

// exports.updateMovie = async () => {
//   try {
//     const updateMovie = await Movie.update(this.Movie);
//     console.log(updateMovie);
//   } catch (error) {
//     console.log(error);
//   }
// };
