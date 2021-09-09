import React from 'react';

import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = ({items}) => {
    

    const onAdd = (cant) => {
        console.log(cant);
    }

    return (
        <div className="ItemListContainer">
            <ul className="ItemList">
                {items.map((item, index) => {
                    return (
                        <li className="Item" key={item.id} >
                            {item.name}
                        </li>
                    )
                })}
            </ul>

            <ItemCount stock={5} initial={1} onAdd={onAdd} />
            
        </div>
    );
}

export default ItemListContainer;
