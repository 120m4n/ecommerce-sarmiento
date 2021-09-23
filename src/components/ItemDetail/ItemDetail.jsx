import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const InputCount = () => {
    
    return (
        <Link to={`/cart/`}>
            <button className="btn btn-outline-primary" onClick={()=> {console.log('cart')}}>Terminar mi Compra </button>
        </Link>
    );
}

const ItemDetail = ({item}) => {
    const [itemsCart, setItemsCart] = React.useState(0);
    const [inCart, setinCart] = React.useState(false);

    const handleOnAdd = (value) => {
        setinCart(true);
        setItemsCart(itemsCart + 1);
    };

    return (

        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <div className="card text-center mt-3 m-3 m-auto">
                <div className='card-header'> {item.title}</div>
                <div className="card-body">
                    <img src={item.pictureUrl} className="img-thumbnail" alt=""/>
                    <p className="card-text">{item.description}</p>
                </div>
                <div>
                {   inCart ? 
                    <InputCount /> 
                    :
                    <ItemCount stock={5} initial={1} onAdd={handleOnAdd} />
                 }
                </div>


            </div>
        </div>
     
    );
}

export default ItemDetail;
