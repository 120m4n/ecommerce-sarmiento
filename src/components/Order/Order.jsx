import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import {Link, useHistory } from 'react-router-dom';
import { getOrderValue } from '../../services/Firebase';
import { formatEuro, formatTax, formatIncludeTax } from '../../utils/CashFormat';

const Order = () => {
    const { orderId, setCart, setOrderId } = useContext(CartContext);
    const [total, setTotal] = useState(null)
    const history = useHistory()



    useEffect(() => {
        setCart([]);
        
        if (orderId) {
            getOrderValue(orderId).then(res => {
                setTotal(res.value)
            })
            .catch(err =>{
            console.log(err);
            })

        } else {
            history.push('/');
        }

        return () => {
            setOrderId(null);
        }   
        

    }, [orderId, setOrderId, setCart, history]);

    return (
        <>
         	<div className="container">
                <h2>Gracias por tu compra</h2>
                <div >
				    <p>Puedes hacer seguimiento a tu compra con el siguiente numero de orden</p>
				    <p>
					    orden : <strong>{orderId}</strong>
				    </p>
				    <p>
					    SubTotal: <strong> $ {formatEuro(total)}</strong>
                    </p>
                    				    <p>
					    Impuestos: <strong> $ {formatTax(total)}</strong>
                    </p>
                    				    <p>
					    Total a Pagar: <strong> $ {formatIncludeTax(total)}</strong>
                    </p>
                </div>
            <Link className="mt-3" to={`/`}>
                <button className="btn btn-primary" >Regresar a la tienda</button>
            </Link>
			</div>   
        </>
    );
}

export default Order;
