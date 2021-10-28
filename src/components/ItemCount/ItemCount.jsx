import React from 'react';
import { useState } from 'react';
import './ItemCount.css';
import { formatEuro } from '../../utils/CashFormat'


const ItemCount = ({stock, initial, onAdd, price_include, price_exclude}) => {
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
            <button className="btn btn-outline-primary" onClick={handleAddToCart} disabled={stock>0?false:true}>
                <span><i className="fas fa-shopping-cart"></i></span> Añadir al carrito</button>
            <div className="price-box">
                <span className="price-container">
                    <span className="price-wrapper price-including-tax">
                        <span className="price">$&nbsp;{formatEuro(price_include)}</span>
                    </span>
                    <span className="price-wrapper price-excluding-tax">
                        <span className="price">$&nbsp;{formatEuro(price_exclude)}</span>
                    </span>
                    
                </span>
            </div>
        </div>
    );
}

export default ItemCount;
