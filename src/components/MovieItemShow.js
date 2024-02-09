import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as thinStar } from '@fortawesome/free-regular-svg-icons';

const MovieItemShow = ({ movie, onDelete, onRate, toggleEditMode, onToggleFavorite }) => {

    const icon = movie.isFavorite ? solidStar : thinStar;

    return (
        <>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <p>Bewertung: {movie.rating}</p>

            <button onClick={() => onDelete(movie.id)}>löschen</button>
            <button onClick={() => onRate(movie.id)}>bewerten</button>
            <button onClick={toggleEditMode}>bearbeiten</button>

            <FontAwesomeIcon
                icon={icon}
                onClick={() => onToggleFavorite(movie.id)} />
                
            <hr />
        </>
    );
};

export default MovieItemShow;