const movies = require('./movies.json')
// console.log(movies.length);

// forEach: print every movie
const printMovie = movie => {
  console.log(movie);
};
// movies.forEach(printMovie);

// Map: Get all of the thumbnails for the movies
const thumbnails = movies.map((movie) => movie.thumbnail);

// Filter: Get a list of movies where Zendaya was in the cast
const zendayaMovies = movies.filter(movie => movie.cast.includes('Zendaya'));

// Filter: Get a list of movies made in 2020
const moviesMadeIn2020 = movies.filter(movie => movie.year === 2020)

// Filter: Get a list of comedy movies made in 2020
const comediesMadeIn2020 = movies.filter(movie => movie.genres.includes('Comedy') && movie.year === 2020)

// Filter + Map: Get just the titles of the comedies made in 2020
const comedyTitlesIn2020 = movies
  .filter(movie => movie.genres.includes('Comedy') && movie.year === 2020)
  .map(movie => movie.title);

// Filter + Map: Get just the names of the movies where Zendaya was in the cast
const zendayaMovieTitles = movies
  .filter(movie => movie.cast.includes('Zendaya'))
  .map(movie => movie.title);

// Reduce: Create a dictionary of { genre: movieCount } for all genres
const genreCounts = movies.reduce((genreCounts, movie) => {
  movie.genres.forEach(genre => {
    if (!genreCounts[genre]) {
      genreCounts[genre] = 0;
    }
    genreCounts[genre] += 1;
  })
  return genreCounts;
}, {});

// Reduce: Calculate the average cast size for all movies
const averageCastSize = movies.reduce((totalCastSize, movie) => {
  return totalCastSize + movie.cast.length
}, 0) / movies.length;
