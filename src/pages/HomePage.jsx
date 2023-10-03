import React from 'react'
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';




function HomePage() {

    // const CountryList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://ih-countries-api.herokuapp.com/countries');
        setCountries(response.data);
        console.log (response.data)
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    <h1>List of Countries</h1>
    <ul>
      {countries.map((country, index) => (
        <li key={index}>
          <Link to={`/${country.alpha3Code}`}>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common} />
            {country.name.common}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
};



export default HomePage;
