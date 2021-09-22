import React from 'react';
import { getFetch } from '../../utils/Mock';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

// import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";



// console.log(getFetch);


const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const {idCategoria} = useParams();
    

    // const onAdd = (cant) => {
    //     console.log(cant);
    // }

    useEffect(() => {
        if (idCategoria) {	
            getFetch
            .then(res => {
                setProductos(res.filter(producto => producto.categoria === idCategoria));
            })
            .catch(err => { console.log(err) })
            .finally(() => setLoading(false));

        }else {

            getFetch
            .then(res => {
                setProductos(res);
            })
            .catch(err => { console.log(err) })
            .finally(() => setLoading(false));
        }
        }, [idCategoria])     



    return (
        <div>
            <h1>{greeting}</h1>
            {loading ? <h1>Cargando...</h1> : <ItemList productos={productos}/>}

            {/* <ItemCount stock={5} initial={1} onAdd={onAdd} /> */}

            
        </div>
    );
}

export default ItemListContainer;
