import React, { useEffect, useState } from 'react'

export const CartContext = React.createContext()

const initialCart = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(initialCart)
	const [orderId, setOrderId] = useState(null)


	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	const totalItemCart = () => {
        return cart.reduce((acc, item) => {
            return acc + item.quantity
        }, 0)
    }

	const totalPriceCart = () => {
		return cart.reduce((acc, item) => {
			return acc + item.quantity * item.item.price
		}, 0)
	}		

	const addItem = (itemCart, quantity) => {
		const productsInCart = cart.filter(({ item }) => item.id !== itemCart.id)
		setCart([...productsInCart, { item: itemCart, quantity }])
	}
	const isInCart = (id) => {
		return cart.some(({ item }) => item.id === id)
	}
	const removeItem = (id) => {
		const productsFiltered = cart.filter(({ item }) => item.id !== id)
		setCart(productsFiltered)
	}
	const getQuantity = (id) => {
		return cart.find((product) => product.item.id === id)?.quantity || 1
	}
	const clearCart = () => setCart([])
	return (
		<CartContext.Provider
			value={{ cart, addItem, isInCart, removeItem, clearCart, getQuantity, totalItemCart, totalPriceCart, setOrderId, orderId, setCart }}
		>
			{children}
		</CartContext.Provider>
	)
}