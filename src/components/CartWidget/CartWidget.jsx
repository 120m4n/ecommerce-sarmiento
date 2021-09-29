import {useContext} from 'react'
import cart_logo from '../../assets/shopping_cart.png'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';

import './CartWidget.css'

function CartWidget({count}) {
    const { totalItemCart } = useContext(CartContext);//return a function


    return (
        <>
            <Link to={totalItemCart > 0 ? "/cart": "#"}>
                <img width="30" src={cart_logo} alt='logotipo shoppingcart' />
                <span className='indicator__count indicator__count--active'>{totalItemCart()}</span>
            </Link>
        </>
    )
}

export default CartWidget
