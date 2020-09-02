import React, { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {

    // all countries = https://restcountries.eu/rest/v2/all
    // countries by names = https://restcountries.eu/rest/v2/name/{name}

    const [countrys, setCountrys] = useState([]);

    useEffect(() => {
        const url = ''

    }, [])

    return (
        <div>

        </div>
    );
};

export default Home;