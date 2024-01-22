import React, { useEffect, useState } from 'react';
import srkMovies from '../db.json';
import '../App.css';
import MovieForm from './Movieform';

const FetchMoviesData = () => {
  const [data, setData] = useState(srkMovies.srkMovies);

  const addMovie = (newMovie) => {
    setData([...data, newMovie]);
  };

  const deleteMovie = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };


  useEffect(() => {
    const fetchData = async () => {
      setData(srkMovies.srkMovies);
    };
    fetchData();
  }, []);

  return (
    <div>
      <MovieForm addMovie={addMovie} />
      <div className="card-list">
        {data.map((item, index) => (
          <div key={index} className="card">
            <img src={item.img} alt={item.title} className="card-image" />
            <div className="card-content">
              <h1 className="card-title">{item.title} </h1>
              <h2 className="card-year">{item.year} </h2>
            </div>
            <button onClick={() => deleteMovie(index)}>Delete</button>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default FetchMoviesData;
