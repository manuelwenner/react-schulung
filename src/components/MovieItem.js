import React, { useState } from 'react';
import MovieItemEdit from './MovieItemEdit';
import MovieItemShow from './MovieItemShow';

const MovieItemElement = ({ movie, onRate, onDelete, onEdit, onToggleFavorite }) => {
    const [isEditing, setIsEditing] = useState(false);

    const toggleEditMode = () => {
        setIsEditing(true);
    };

    const handleEdit = (id, title, description) => {
        setIsEditing(false);
        onEdit(id, title, description);
    };

    return (
        <div>
            {isEditing ? (
                <MovieItemEdit movie={movie} onEdit={handleEdit} />
            ) : (
                <MovieItemShow 
                    movie={movie} 
                    onDelete={onDelete} 
                    onRate={onRate} 
                    toggleEditMode={toggleEditMode}
                    onToggleFavorite={onToggleFavorite}
                    />
            )
            }
        </div>
    );
};

export default MovieItemElement;
