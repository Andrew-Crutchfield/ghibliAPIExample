import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PeoplePage = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('http://api-ghibli.herokuapp.com/people')
            .then(response => response.json())
            .then(data => setPeople(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="container">
            <h2>People</h2>
            <div className="row">
                {people.map(person => (
                    <div key={person.id} className="col-md-4">
                        <div className="card my-3">
                            <div className="card-body">
                                <h2 className="card-title">{person.name}</h2>
                                <p className="card-text">Age: {person.age}</p>
                                <p className="card-text">Gender: {person.gender}</p>
                                <Link to={`/people/${person.id}`} className="btn btn-primary">View Details</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PeoplePage;