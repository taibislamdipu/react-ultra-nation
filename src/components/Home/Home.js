import React, { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';

const Home = () => {

    const [countrys, setCountrys] = useState([]);

    useEffect(() => {
        const url = 'https://restcountries.eu/rest/v2/all';
        fetch(url)
            .then(res => res.json())
            .then(data => setCountrys(data))

    }, [])

    return (
        <div>
            <h1>Total Country: {countrys.length}</h1>

            {
                countrys.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Home;