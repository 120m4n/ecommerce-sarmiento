import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({producto}) => {
    // console.log(producto.title);
    return (
        <div id="product-item" className="col-12 col-sm-12 col-md-6 col-lg-4 mt-3">
             <Link to={`/item/${producto.id}`}>
                 <div className="item product product-item">
                    <div className="product-item-info cardx mt-3 m-3 m-auto">
                        <div className='cardx-header'>
                            <h5 className="cardx-title text-center">{producto.title}</h5>
                        </div>
                        <div className="product-image-wrapper cardx-body text-center">
                            <img className="product-image-photo cardx-img-top " src={producto.pictureUrl}  loading="lazy" width="240" height="240" alt={producto.title}/>
                            {/* {producto.title} */}
                            <p className="d-none cardx-text">{producto.description}</p>
                        </div>
                        <div className="cardx-footer">
                        
                                <button className="btn btn-primary btn-block" >Detalles</button>
                        
                        </div>
                    </div> 
                </div> 
            </Link>
        </div>
    );
}

export default Item;
