import React from 'react';
import {Link} from 'react-router-dom';
import empty_image from "../../assets/empty-cart.png";

const EmptyCart = () => {
    return (
        <div className="container d-flex flex-column flex-wrap align-content-center">
            {/* <h2>El carrito se encuetra vacio</h2> */}
            <img src={empty_image} alt="empty cart" height="450" width="450"/>
            <Link to="/">
                <button className="btn btn-primary ">Volver</button>
            </Link> 
        </div>
    );
}

export default EmptyCart;
