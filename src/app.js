const yargs = require("yargs");
const { openSequelizeConnection } = require("./db/connection");
const { createMovie, readMovie, updateMovie } = require("./movie/function");
const Movie = require("./movie/table");

async function app(yargsInput) {
  await openSequelizeConnection.sync();
  if (yargsInput.create) {
    // code to add movie
    await createMovie({
      title: yargsInput.title,
      actor: yargsInput.actor,
      director: yargsInput.director,
      rating: yargsInput.rating,
    });
  } else if (yargsInput.read) {
    // code to list movies
    await readMovie();
  } else if (yargsInput.update) {
    // code to updte field actor
    const updateMovie = await Movie.update(
      {
        actor: yargsInput.actor,
      },
      {
        where: {
          title: yargsInput.title,
        },
      }
    );
    console.log(updateMovie);
  } else if (yargsInput.delete) {
    // put code to delete a movie
    const deleteMovie = await Movie.destroy({
      where: {
        title: yargsInput.title,
      },
    });
    console.log(deleteMovie);
  } else {
    console.log("Unrecognised command");
  }
}

app(yargs.argv);
