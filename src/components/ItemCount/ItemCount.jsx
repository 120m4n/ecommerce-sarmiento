import React from 'react';
import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const handleRemove = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    const handleAddToCart = () => {
        onAdd(count);
    }

    return (
        <div className="item__container product-add-form">
            <p className="item__text">Cantidad</p>
            <div className="item__selection">
                <button className="btn btn-outline-primary btn-size" onClick={handleRemove}>-</button>
                <div className="item__number">{count}</div>
                <button className="btn btn-outline-primary btn-size" onClick={handleAdd}>+</button>
            </div>
            <button className="btn btn-outline-primary" onClick={handleAddToCart}><span><i className="fas fa-shopping-cart"></i></span> Añadir al carrito</button>
        </div>
    );
}

export default ItemCount;
