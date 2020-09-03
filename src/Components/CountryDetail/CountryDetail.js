import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const CountryDetail = () => {
    const {countryId} = useParams();
    const [country, setCountry] = useState({});
    useEffect(()=> {
        // const url = (`https://restcountries.eu/rest/v2/name/${countryId}`);
        const url = (`https://restcountries.eu/rest/v2/name/bangladesh`);
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data[0]);
            setCountry(data);
        })
    }, [])
    return (
        <div>
            <p>Calling Codes Details: {countryId}</p>
            <h4>{country.name}</h4>
        </div>
    );
};

export default CountryDetail;