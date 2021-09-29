import React, { useEffect, useState } from 'react'

export const CartContext = React.createContext()

const initialCart = JSON.parse(localStorage.getItem('cart')) || []

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(initialCart)


	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])

	const totalItemCart = () => {
        return cart.reduce((acc, item) => {
            return acc + item.quantity
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
	const clear = () => setCart([])
	return (
		<CartContext.Provider
			value={{ cart, addItem, isInCart, removeItem, clear, getQuantity, totalItemCart }}
		>
			{children}
		</CartContext.Provider>
	)
}