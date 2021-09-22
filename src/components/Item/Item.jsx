import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
    // console.log(producto.title);
    return (
            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                <div className="card text-center mt-3 m-3 m-auto">
                    <div className='card-header'> {producto.title}</div>
                    <div className="card-body">
                        <img src={producto.pictureUrl} alt=""/>
                        <p className="card-text">{producto.description}</p>
                    </div>
                    <div className="card-footer">
                    <Link to={`/item/${producto.id}`}>
                        <button className="btn btn-primary btn-block" onClick={()=> console.log('click')}>Detalles</button>
                    </Link>
                    </div>
                </div>
            </div>
    );
}

export default Item;
