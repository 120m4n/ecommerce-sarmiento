import React from 'react';
import { getFetch } from '../../utils/Mock';
import {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({greeting}) => {
    const [item, setItem] =useState({}); //<--ojo que solo pasa un objeto
    const [loading, setLoading] = useState(true);
    const {idProducto} = useParams();

    useEffect(() => {
        if (idProducto) {	
            // console.log('idProducto', idProducto);
            // console.log(typeof idProducto);
            getFetch
            .then(res => {
                const itemFiltrado = res.filter(producto => producto.id === parseInt(idProducto));
                // console.log(itemFiltrado);
                setItem(itemFiltrado[0]);
            })
            .catch(err => { console.log(err) })
            .finally(() => setLoading(false));

        }
    }, [idProducto]);
    
    return (
        <div className="container">
            {loading ? <h1>Cargando Detalle Item...</h1> : item && <ItemDetail item={item} />}
        </div>
    );
}

export default ItemDetailContainer;
