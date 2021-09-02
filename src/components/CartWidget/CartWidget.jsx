import React from 'react'
import cart_logo from '../../assets/shopping_cart.png'

import './CartWidget.css'

function CartWidget({count}) {
    return (
        <div>
            <img width="30" src={cart_logo} alt='logotipo shoppingcart' />
            <span className='indicator__count indicator__count--active'>{count}</span>
        </div>
    )
}

export default CartWidget
