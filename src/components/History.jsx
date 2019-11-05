import React from 'react';
import { Link } from 'react-router-dom';
const History = () => {
    return (
        <>
            <Link to='/notre-histoire'>To history.</Link>
            <p> The MOST useful paragraph.</p>
            <p>Notre histoire.</p>
            <Link to='/'>Back to homeland.</Link>

        </>)
}
export default History 