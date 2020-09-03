import React from 'react';
import './Country.css';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name, capital, population, flag, callingCodes} = props.country;
    return (
        <div className="cities">
             <img className="flag" src={flag} alt=""/>
            <h4>Name: {name}</h4>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p>Country Detail: 
                <Link to={`/country/${callingCodes}`}>
                    Show Country Details {callingCodes}
                </Link></p>

            <button>Click me</button>
        </div>
    );
};

export default Country;