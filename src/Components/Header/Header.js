import React, { useState, useEffect } from 'react';
import './Header.css';
import Country from '../Country/Country';

const Header = () => {
    const [countries, setCountries] = useState([]);
    
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>Count Cities: {countries.length}</h1>
            {
                countries.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Header;