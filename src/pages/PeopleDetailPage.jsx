import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const PeopleDetail = () => {
    const [person, setPerson] = useState(null);
    const { personid } = useParams(); // Get the person id from URL parameters

    useEffect(() => {
        fetch(`http://api-ghibli.herokuapp.com/people/${personid}`)
            .then(response => response.json())
            .then(person => setPerson(person))
            .catch(error => console.log(error));
    }, [personid]); // Reload the component when personid changes

    // Render a loading message while the person data is being fetched
    if (!person) return <h2>Loading...</h2>;

    return (
        <div className="container">
            <h2>{person.name}</h2>
            <p><strong>Gender:</strong> {person.gender}</p>
            <p><strong>Age:</strong> {person.age}</p>
            <p><strong>Eye Color:</strong> {person.eye_color}</p>
            <p><strong>Hair Color:</strong> {person.hair_color}</p>

            {/* Link to return to the PeoplePage */}
            <Link to="/people" className="btn btn-secondary">Return to People</Link>
        </div>
    );
};

export default PeopleDetail;
