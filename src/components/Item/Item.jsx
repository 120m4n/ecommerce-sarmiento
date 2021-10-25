import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({producto}) => {
    console.log(producto);
    return (
        <div id="product-item" className="ui-item__wrapper col-12 col-sm-12 col-md-6 col-lg-3 mt-3">
             
                 <div className="ui-item">
                {/* <div className="product-item-info cardx mt-3 m-3 m-auto"> */}
                <Link className="ui-item__link" to={`/item/${producto.id}`}>
                        <div className="ui-item__image-container">
                            <img className="ui-item__image " src={producto.pictureUrl}  width="224" height="224" alt={producto.title}/>
                            {/* {producto.title} */}
                            <p className="d-none cardx-text">{producto.description}</p>
                        </div>
                        <div className="ui-item__content">
                            <div className="product-price">
                                <span className="price">${producto.price}</span>
                            </div>
                            <p class="ui-item__title" aria-hidden="true">{producto.title}</p>
                        </div>
                        <button className="product-bookmark d-none">
                            <i class="fas fa-heart"></i>
                        </button>
                    {/* </div>  */}
                     </Link>
                </div> 
           
        </div>
    );
}

export default Item;
