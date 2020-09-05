import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const CountryDetail = () => {

    // countries by names = https://restcountries.eu/rest/v2/name/{name}

    const { countryName } = useParams();

    const [country, setCountry] = useState([]);

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setCountry(data[0]))

    }, [])

    return (
        <div>
            {console.log(country)}
            <h1>Summary of {countryName}</h1>
            <h3>Capital: {country.capital}</h3>
            <h2>Population: {country.population}</h2>
            <img src={country.flag} alt="country flag" />
            <h3>Region: {country.region}</h3>
        </div >
    );
};

export default CountryDetail;