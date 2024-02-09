let movies = [
  {
    id: 1,
    title: 'Inception',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
    rating: 8.8,
    isFavorite: true
  },
  {
    id: 2,
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    description: 'After the Rebels are overpowered by the Empire, Luke Skywalker begins his Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.',
    rating: 8.7,
    isFavorite: false
  },
  {
    id: 3,
    title: 'Avengers: Endgame',
    description: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe.',
    rating: 8.4,
    isFavorite: true
  },
  {
    id: 4,
    title: 'The Godfather',
    description: 'Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.',
    rating: 9.2,
    isFavorite: false
  },
  {
    id: 5,
    title: '2001: A Space Odyssey',
    description: 'After uncovering a mysterious artifact buried beneath the Lunar surface, a spacecraft is sent to Jupiter to find its origins - a spacecraft manned by two men and the supercomputer H.A.L. 9000.',
    rating: 8.3,
    isFavorite: false
  },
];

export const getMovies = () => JSON.parse(localStorage.getItem('movies')) || movies;

export const deleteMovie = (movieId) => {
  movies = getMovies().filter((movie) => movie.id !== movieId);
  saveMovies(movies);
  return movies;
};

export const addMovie = (movie) => {
  // getMovies().push(movie); // erstellt keine neue Kopie des arrays
  movies = [...getMovies(), movie]; // erstellt eine neue Kopie des arrays
  saveMovies(movies);
  return movies;
};

export const addMovies = (apiMovies) => {
  let combinedMovies = [...getMovies(), ...apiMovies];
  const uniqueMovies = Array.from(new Set(combinedMovies.map((movie) => movie.id))).map((id) => {
    return combinedMovies.find((movie) => movie.id === id);
  });

  saveMovies(uniqueMovies);

  return uniqueMovies;
}

export const rateMovie = (movieId, rating) => {
  movies = getMovies().map((movie) =>
    movie.id === movieId ? { ...movie, rating } : movie
  );
  saveMovies(movies);
  return movies;
};

export const editMovie = (movieId, title, description) => {
  movies = getMovies().map((movie) =>
    movie.id === movieId ? { ...movie, title, description } : movie
  )
  saveMovies(movies);
  return movies;
};


export const toggleFavorite = (movieId) => {
  movies = getMovies().map((movie) =>
    movie.id === movieId ? { ...movie, isFavorite: !movie.isFavorite } : movie
  );
  saveMovies(movies);
  return movies;
};

export const getFavorites = () => {
    return getMovies().filter((movie) => movie.isFavorite === true);
};

const saveMovies = (movies) => {
  localStorage.setItem('movies', JSON.stringify(movies));
}