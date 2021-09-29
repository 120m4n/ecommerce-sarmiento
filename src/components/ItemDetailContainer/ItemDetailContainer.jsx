// import { getFetch } from '../../utils/Mock';
import {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Loading from '../../utils/Loading';
import { getItemById } from '../../services/Firebase';


const ItemDetailContainer = () => {
    const [item, setItem] =useState({}); //<--ojo que solo pasa un objeto
    const [loading, setLoading] = useState(true);
    const {idProducto} = useParams();

    useEffect(() => {
        if (idProducto) {	
            getItemById(idProducto)
            .then(result => {
                const status = result.status;
                const producto = result.item;
                if (status === 'success') {
                    setItem(producto); 
                }
            })
            .catch(err => { console.log(err) })
            .finally(() => setLoading(false));

        }
    }, [idProducto]);
    
    return (
        <div className="container">
            {loading ? <Loading/> : item && <ItemDetail item={item} />}
        </div>
    );
}

export default ItemDetailContainer;
