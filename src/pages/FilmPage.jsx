import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FilmPage = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('http://api-ghibli.herokuapp.com/films')
            .then((response) => response.json())
            .then((films) => setFilms(films))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="container">
            <div className="row"> {/* add this line */}
                {films.map(film => (
                    <div key={film.id} className="col-md-6"> {/* adjust this line */}
                        <div className="card my-3">
                            <div className="card-body">
                                <h2 className="card-title">{film.title}</h2>
                                <p className="card-text">{film.description}</p>
                                <p><strong>Director:</strong> {film.director}</p>
                                <p><strong>Producer:</strong> {film.producer}</p>
                                <p><strong>Release Date:</strong> {film.release_date}</p>
                                <p><strong>Rotten Tomatoes Score:</strong> {film.rt_score}</p>
                                <Link to={`/films/${film.id}`} className="btn btn-primary">View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div> {/* add this line */}
        </div>
    );
};

export default FilmPage;