import React from 'react';

const Item = ({producto}) => {
    console.log(producto.title);
    return (
            <div className="card text-center w-25 mb-3">
                <div className='card-header'> {producto.title}</div>
                <div className="card-body">
                    <img src={producto.pictureUrl} alt=""/>
                </div>
                <div className="card-footer">
                    <button className="btn btn-primary btn-block" onClick={()=> console.log('click')}>Detalles</button>
                </div>
            </div>
    );
}

export default Item;
