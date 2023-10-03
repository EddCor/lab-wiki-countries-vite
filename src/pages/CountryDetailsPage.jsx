// import React from 'react'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


// function CountryDetailsPage() {

const CountryDetailsPage = () => {
    const { alpha3Code } = useParams();
    const [countryDetails, setCountryDetails] = useState(null);
    const [loading, setLoading] = useState(true);
      
    useEffect(() => {
        const fetchCountryDetails = async () => {
          try {
            const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`);
            setCountryDetails(response.data);
            setLoading(false); 
          } catch (error) {
            console.error('Error fetching country details:', error);
            setLoading(false); 
          }
        };
      
          fetchCountryDetails();
        }, [alpha3Code]);




  return (
    // <div>CountryDetailsPage</div>
    <div>
    {countryDetails ? (
      <div>
        <h1>{countryDetails.name.common}</h1>
        <p>Alpha3Code: {countryDetails.alpha3Code}</p>
        <p>Capital: {countryDetails.capital}</p>
        <p>Borders: {countryDetails.borders}</p>

       
      </div>
    ) : (
      <p>Loading country details...</p>
    )}
  </div>
);
};



export default CountryDetailsPage