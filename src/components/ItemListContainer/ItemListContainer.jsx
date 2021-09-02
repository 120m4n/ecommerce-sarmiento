import React from 'react';

const ItemListContainer = ({items}) => {
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
            
        </div>
    );
}

export default ItemListContainer;
