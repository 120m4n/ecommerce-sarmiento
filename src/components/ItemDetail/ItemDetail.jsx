import React from 'react';

const ItemDetail = ({item}) => {
    return (
        <>
         {/* <h2>{item.id}</h2>  
         <h2>{item.title}</h2> 
         <h2>{item.description}</h2>    */}
        <div className="card text-center w-25 mb-3">
            <div className='card-header'> {item.title}</div>
            <div className="card-body">
                <img src={item.pictureUrl} className="img-thumbnail" alt=""/>
                <p>{item.description}</p>
            </div>
            <div className="card-footer">
                <button className="btn btn-primary btn-block" onClick={()=> console.log('click')}>Detalles</button>
            </div>
        </div>
        </>
    );
}

export default ItemDetail;
