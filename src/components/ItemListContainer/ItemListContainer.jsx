import React from 'react';
import { getFetch } from '../../utils/Mock';
import {useState, useEffect} from 'react';

import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";


console.log(getFetch);


const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    

    const onAdd = (cant) => {
        console.log(cant);
    }

    useEffect(() => {
        getFetch
            .then(res => {
                setProductos(res);
            })
            .catch(err => { console.log(err) })
            .finally(() => setLoading(false));
        }, [])     



    return (
        <div>
            <h1>{greeting}</h1>
            {loading ? <h1>Cargando...</h1> : <ItemList productos={productos}/>}

            <ItemCount stock={5} initial={1} onAdd={onAdd} />

            
        </div>
    );
}

export default ItemListContainer;
