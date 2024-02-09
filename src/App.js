import React, { useState } from 'react';
import DataHandler from './data/dataHandlerClass';
// import { getMovies } from './data/dataHandler';

import MovieList from './components/MovieList';

const dataHandler = new DataHandler();

function App() {

  const [movies, setMovies] = useState(dataHandler.getMovies());

  const handleDeleteMovie = (id) => {
    setMovies(dataHandler.deleteMovie(id));
  }

  const handleAddMovie = () => {
    var movie = { id: movies.length + 1, title: 'New Movie', description: 'Super toller neuer Film', rating: 0 };
    setMovies(dataHandler.addMovie(movie));
  }

  const handleRateMovie = (movieId) => {
    const rating = parseFloat(prompt('Bitte geben Sie eine Bewertung ein (0-10):'));
    if (!isNaN(rating) && rating >= 0 && rating <= 10) {
      setMovies(dataHandler.rateMovie(movieId, rating));
    }
  }

  const handleEdit = (id, title, description) => {
    setMovies(dataHandler.editMovie(id, title, description))
  };

  const handleToggleFavorit = (movieId) => {
    setMovies(dataHandler.toggleFavorite(movieId));
  };

  console.log(movies);

  return (
    <div className="App">
      <MovieList
        movies={movies}
        onDelete={handleDeleteMovie}
        onRate={handleRateMovie}
        onEdit={handleEdit}
        onToggleFavorite={handleToggleFavorit}
      />

      <button onClick={() => handleAddMovie()}>hinzufügen</button>
    </div>
  );
}

export default App;
