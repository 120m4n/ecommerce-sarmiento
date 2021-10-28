import React, { useEffect, useState } from 'react'

export const FavContext = React.createContext()

const initialFav = JSON.parse(localStorage.getItem('favoritos')) || []

export const FavProvider = ({ children }) => {
    const [favoritos, setFavoritos] = useState(initialFav)

    useEffect(() => {
        localStorage.setItem('favoritos', JSON.stringify(favoritos))
    }, [favoritos])

    const addFav = (id) => {
        setFavoritos([...favoritos, id])
    }

    const removeFav = (id) => {
        setFavoritos(favoritos.filter((fav) => fav !== id))
    }

    const isInFavoritos = (id) => {
        return favoritos.includes(id)
    }
    
    return (
        <FavContext.Provider value={{ favoritos, addFav, removeFav, isInFavoritos }} >
            {children}
        </FavContext.Provider>
    )

}