import {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import './Item.css'
import { formatEuro } from '../../utils/CashFormat'
import {FavContext} from '../../context/FavContext'

const Item = ({ producto }) => {
    const { isInFavoritos, addFav, removeFav } = useContext(FavContext);
    const [isFav, setIsFav] = useState(isInFavoritos(producto.id));

    const handleFavorite = () => {
        setIsFav(!isFav);
        if (!isFav) {
            addFav(producto.id);
        } else {
            removeFav(producto.id);
        }
    }

    return (
        <div id="product-item" className="ui-item__wrapper col-12 col-sm-12 col-md-6 col-lg-3 mt-3">           
            <div className="ui-item">
                <button className="product-bookmark favorito" onClick={handleFavorite}>
                    {isFav ? (
                        <i className="fas fa-heart"></i>
                    ) : (
                        <i className="far fa-heart"></i>
                    )}
                </button>

                <Link className="ui-item__link" to={`/item/${producto.id}`}>
                        <div className="ui-item__image-container">
                            <img className="ui-item__image " src={producto.pictureUrl}  width="224" height="224" alt={producto.title}/>
                        </div>
                        <div className="ui-item__content">
                            <div className="product-price price-box">
                            <p className="price">${formatEuro(producto.price)}</p>
                            {producto.stock>0?null:<p className="product-stock">AGOTADO</p>}
                            </div>
                            
                        
                            <p className="ui-item__title" aria-hidden="true">{producto.title}</p>
                        </div>
                </Link>
            </div> 
        </div>
    );
}

export default Item;
