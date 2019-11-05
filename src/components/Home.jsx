import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return(
        <>
        <Link to='/notre-histoire'>To history.</Link>
        <p> A very useful paragraph.</p>
        <p>Bienvenue sur l'accueil.</p>
        </>)
}

export default Home;