const yargs = require("yargs");
const { openSequelizeConnection } = require("./db/connection");
const {
  createMovie,
  readMovie,
  updateMovie,
  createActor,
  readActor,
} = require("./movie/function");
const { Movie, Director, Actor } = require("./movie/table");

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
    console.log("Entering update");
    // code to update field actor
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
    // await updateMovie();
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
  //!ACTOR:
  if (yargsInput.createactor) {
    await createActor({
      actor: yargsInput.actor,
      age: yargsInput.age,
    });
  } else if (yargsInput.readactor) {
    console.log("Entering read");
    await readActor();
  }
  //director table:
  // if (yargsInput.directorInfo) {
  // const moviesDirected = await Director.findAll({
  //   where: {
  //     director: yargsInput.director,
  //   },
  //   include: Movie,
  // });
  // console.log(moviesDirected);
  //   const movies = await Movie.findAll({ include: Director });
  //   console.log(JSON.stringify(movies, null, 2));
  // }
}

app(yargs.argv);
