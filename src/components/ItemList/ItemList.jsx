import React from 'react';
import Item from '../Item/Item';

const ItemList = ({productos}) => {
    // console.log(productos);
    return (
        <div className="row justify-content-around">
            {productos.map(producto => <Item key={producto.id} producto={producto} />)}
        </div>
    )
}

export default ItemList;
