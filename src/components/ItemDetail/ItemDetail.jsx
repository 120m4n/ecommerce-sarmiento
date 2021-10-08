import {useState, useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'
import './ItemDetail.css';

const InputCount = ({totalProductos, onClick}) => {
    
    return (
        <div id="product_add_cart" className="d-flex flex-column pt-3">
            <div className="btn-group">
                <Link to={`/cart/`}>
                    <button className="btn btn-success" onClick={()=> {console.log('cart')}}>Terminar Compra </button>
                    
                </Link>
                <button className="btn btn-outline-primary" onClick={onClick}>Editar compra</button>
            </div>
            <Link to={`/`}>
                <button className="d-block btn btn-outline-primary mt-3">Seguir Comprando</button>
            </Link>
            <div className="d-block mt-3">
                {
                   totalProductos> 1?
                        <p>Ya tienes <strong>{totalProductos} Productos</strong> de estos en tu carrito </p>
                    :
                        <p>Se agregó <strong>{totalProductos} Producto</strong> a tu carrito </p>
                    
                }
                <p>Subtotal del carrito: <strong>$0.000</strong></p>
            </div>

        </div>
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

        <div className="container">
            <div className="d-flex mb-3">
                
                <div className="card-body">
                    
                    <img src={item.pictureUrl} className="img-thumbnail" alt=""/>
                    
                </div>
                <div className="product-details p-3 w-50">
                   <div className='product-title'>
                        <h1>{item.title}</h1>
                    </div>
                   
                   <div className="product-info-price">
                        <div className="product-info-stock-sku">     
                            <div className="stock available" title="Disponibilidad" >
                                <span>Disponible</span>
                            </div>    
                            <div className="product attribute sku"> 
                                <strong className="type">SKU</strong>  
                                <div className="value">
                                    111111339
                                </div>
                            </div>
                        </div>
                    </div>
                    <p>{item.description}</p> 
                </div>

                <div className="w-25">
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
