import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item}) => {
    return (

        <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <div className="card text-center mt-3 m-3 m-auto">
                <div className='card-header'> {item.title}</div>
                <div className="card-body">
                    <img src={item.pictureUrl} className="img-thumbnail" alt=""/>
                    <p className="card-text">{item.description}</p>
                </div>
                <div>
                    <ItemCount stock={5} initial={1}  />
                </div>

                {/* <div className="card-footer">
                    <button className="btn btn-primary btn-block" onClick={()=> console.log('click')}>Agrregar al carrito</button>
                </div> */}
            </div>
        </div>
     
    );
}

export default ItemDetail;
