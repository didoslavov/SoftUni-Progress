function movies(moviesInput) {
  class Movie {
    constructor(movieName) {
      this.name = movieName;
    }
  }

  const movieList = [];

  for (const movieInfo of moviesInput) {
    if (movieInfo.includes('addMovie')) {
      const movieName = movieInfo.replace('addMovie ', '');
      const newMovie = new Movie(movieName);
      movieList.push(newMovie);
    } else if (movieInfo.includes('directedBy')) {
      const movieInput = movieInfo.split(' ');
      const index = movieInput.indexOf('directedBy');
      const director = movieInput.splice(index).join(' ').replace('directedBy ', '');
      const movieName = movieInput.join(' ');

      for (const movie of movieList) {
        if (Object.values(movie).includes(movieName)) {
          movie.director = director;
        }
      }
    } else if (movieInfo.includes('onDate')) {
      const movieInput = movieInfo.split(' ');
      const index = movieInput.indexOf('onDate');
      const date = movieInput.splice(index).join(' ').replace('onDate ', '');
      const movieName = movieInput.join(' ');

      for (const movie of movieList) {
        if (Object.values(movie).includes(movieName)) {
          movie.date = date;
        }
      }
    }
  }

    for (const movie of movieList) {
        if ('name' in movie && 'director' in movie && 'date' in movie) {
            console.log(JSON.stringify(movie));
        }
    }
}

movies([
  'addMovie Fast and Furious',
  'addMovie Godfather',
  'Inception directedBy Christopher Nolan',
  'Godfather directedBy Francis Ford Coppola',
  'Godfather onDate 29.07.2018',
  'Fast and Furious onDate 30.07.2018',
  'Batman onDate 01.08.2018',
  'Fast and Furious directedBy Rob Cohen',
]);
