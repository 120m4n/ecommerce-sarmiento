import {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import CartList from './CartList.jsx';
import EmptyCart from './EmptyCart.jsx';

const Cart = () => {
    const {cart} = useContext(CartContext);
    return (
        <div className="container d-flex">
            {
                cart.length === 0 ?
                <EmptyCart/>
                :
                <CartList/>
            }
        </div>
    );
}

export default Cart;
