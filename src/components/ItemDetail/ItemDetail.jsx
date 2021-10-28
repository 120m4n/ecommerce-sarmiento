import {useState, useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import InputCount from '../ItemCount/InputCount';
import { CartContext } from '../../context/CartContext'
import { Row } from 'react-bootstrap';





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

            <Row>
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
                                <div className={`stock ${item.stock>0?'available':'unavailable'}`} >
                                    <span>{`${item.stock>0?'Disponible':'No Disponible'}`}</span>
                                </div>    
                                <div className="product attribute sku"> 
                                    <strong className="type">SKU</strong>  
                                    <div className="value">
                                        { item.sku }
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
                            <ItemCount stock={item.stock} initial={getQuantity(item.id)}
                                onAdd={handleOnAdd} price_include={item.price}
                                price_exclude={Math.floor(item.price / 1.19) } />
                        }
                    </div>
            </div> 
            </Row>

            
        </div>
        
     
    );
}

export default ItemDetail;
