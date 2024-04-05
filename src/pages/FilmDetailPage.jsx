import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const FilmDetail = () => {
    const [film, setFilm] = useState(null);
    const { filmid } = useParams(); // Get the film id from URL parameters

    useEffect(() => {
        fetch(`http://api-ghibli.herokuapp.com/films/${filmid}`)
            .then((response) => response.json())
            .then((film) => setFilm(film))
            .catch((error) => console.log(error));
    }, [filmid]); // Reload the component when filmid changes

    // Render a loading message while the film data is being fetched
    if (!film) return <h2>Loading...</h2>;

    return (
        <div className="container">
            <h2>{film.title}</h2>
            <p>{film.description}</p>
            <p><strong>Director:</strong> {film.director}</p>
            <p><strong>Producer:</strong> {film.producer}</p>
            <p><strong>Release Date:</strong> {film.release_date}</p>
            <p><strong>Rotten Tomatoes Score:</strong> {film.rt_score}</p>
            
            {/* Link to return to the FilmPage */}
            <Link to="/films" className="btn btn-secondary">Return to Films</Link>
        </div>
    );
};

export default FilmDetail;