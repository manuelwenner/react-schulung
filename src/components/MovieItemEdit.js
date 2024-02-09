import React, { useState } from 'react';

const MovieItemEdit = ({ movie, onEdit }) => {
    const styles = {
        listItem: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderBottom: '1px gray solid',
            paddingBottom: 16
        },
        textarea: {
            width: '100vH'
        },
        title: {
            width: '100vH'
        }
    }

    const [title, setTitle] = useState(movie.title);
    const [description, setDescription] = useState(movie.description);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleSave = () => {
        onEdit(movie.id, title, description);
    };

    return (
        <div style={styles.listItem}>
            <input type="text" value={title} onChange={handleTitleChange} style={styles.title} />
            <textarea value={description} onChange={handleDescriptionChange} style={styles.textarea} />
            <button onClick={handleSave}>Speichern</button>
        </div>
    );
};

export default MovieItemEdit;
