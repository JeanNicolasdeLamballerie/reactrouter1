import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return(
        <>
        <Link to='/notre-histoire'>To history.</Link>
        <Link to='/'>Back to homeland.</Link>
        <p> A very useful paragraph.</p>
        <p>Bienvenue sur l'accueil.</p>
        </>)
}

export default Home;