import {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import CartList from './CartList.jsx';
import EmptyCart from './EmptyCart.jsx';

const Cart = () => {
    const {cart,totalItemCart} = useContext(CartContext);
    console.log(cart);
    return (
        <div className="container">
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
