import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.css';

const NotFound = ({ description }) => {
    return (
		<div className="notfound__container">
			<h2>{description}</h2>
            <img className="notfound__icon" src="http://placekitten.com/200/300" alt="Page not found" />
			<Link to="/">
				<button className="btn btn-danger"> Volver</button>
			</Link>
		</div>
    );
}

export default NotFound;
