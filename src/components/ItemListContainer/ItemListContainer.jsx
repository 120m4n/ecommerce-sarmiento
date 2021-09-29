import React from 'react';
// import { getFetch } from '../../utils/Mock';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../utils/Loading';

// import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { getItemList } from '../../services/Firebase';



const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const {idCategoria} = useParams();
    

    useEffect(() => {
        getItemList(idCategoria)
        .then((result) => {
            const status = result.status;
            const productos = result.items;
            if (status === 'success') {
                setProductos(productos);
            }
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {setLoading(false)})
    }, [idCategoria])     



    return (
        <div className="container">
            {loading ? <Loading/> : productos && <ItemList productos={productos}/>}
        </div>
    );
}

export default ItemListContainer;
