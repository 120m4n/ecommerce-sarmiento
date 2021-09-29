import {useState, useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'

const InputCount = ({totalProductos, onClick}) => {
    
    return (
        <>
            <Link to={`/cart/`}>
                <button className="btn btn-success" onClick={()=> {console.log('cart')}}>Terminar Compra </button>
            </Link>
            <button className="btn btn-outline-primary" onClick={onClick}>Editar compra</button>
            <p>items en carrito: {totalProductos} </p>
        </>
    );
}

const ItemDetail = ({item}) => {
    // const [itemsCart, setItemsCart] = React.useState(0);
    const { isInCart, getQuantity, addItem } = useContext(CartContext);
    const [inCart, setinCart] = useState(isInCart(item.id));

    const handleOnAdd = (value) => {
        setinCart(true);
        // setItemsCart(itemsCart + 1);
        addItem(item, value);
    };

    const handleRestart = () => {
        setinCart(false);
    }

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
                    <InputCount totalProductos={getQuantity(item.id)} onClick={handleRestart}/> 
                    :
                    <ItemCount stock={5} initial={getQuantity(item.id)} onAdd={handleOnAdd} />
                 }
                </div>


            </div>
        </div>
     
    );
}

export default ItemDetail;
