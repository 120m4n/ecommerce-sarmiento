import React from 'react';
import { getFetchById } from '../../utils/Mock';
import {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({greeting}) => {
    const [item, setItem] =useState({}); //<--ojo que solo pasa un objeto
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFetchById
        .then(res => {
            setItem(res);
        })
        .catch(err => { console.log(err) })
        .finally(() => setLoading(false));
    }, []);
    
    return (
        <div>
            <h1>{greeting}</h1>
            {loading ? <h1>Cargando Detail...</h1> : <ItemDetail item={item} />}
        </div>
    );
}

export default ItemDetailContainer;
