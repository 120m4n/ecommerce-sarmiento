import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'

const InputCount = ({ totalProductos, onClick }) => {
    const {totalPriceCart}  = useContext(CartContext);
    
    return (
        <div id="product_add_cart" className="d-flex flex-column pt-3">
            <div className="btn-group">
                <button className="btn btn-outline-primary" onClick={onClick}>Editar compra</button>
            </div>
            {/* <Link to={`/`}>
                <button className="d-block btn btn-outline-primary mt-3">Seguir Comprando</button>
            </Link> */}
            <div className="d-block mt-3">
                {
                   totalProductos> 1?
                        <p>Ya tienes <strong>{totalProductos} Productos</strong> de estos en tu carrito </p>
                    :
                        <p>Se agregó <strong>{totalProductos} Producto</strong> a tu carrito </p>
                    
                }
                <p>Subtotal del carrito: <strong>${totalPriceCart()}</strong></p>
            </div>

            <Link to={`/cart/`}>
                    <button className="btn btn-success w-100">Terminar Compra </button>
            </Link>
            <Link className="mt-3" to={`/`}>
                <span >Regresar a la tienda</span>
            </Link>


        </div>
    );
}

export default InputCount;
