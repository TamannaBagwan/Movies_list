
import React, { useState } from 'react';
const MovieForm = ({ addMovie }) => {
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [year, setYear] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMovie = {
            title: title,
            img: img,
            year: year,
        };
        addMovie(newMovie);
        setTitle('');
        setImg('');
        setYear('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
                Image URL:
                <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />
            </label>
            <label>
                Year:
                <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
            </label>
            <button type="submit">Add Movie</button>
        </form>
    );
};

export default MovieForm;
