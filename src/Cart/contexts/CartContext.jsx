import { createContext, useEffect, useState } from 'react'
import { saveToStorage, updateFromStorage } from '../../Global/utilities/storage';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const initialState = updateFromStorage('cart', 'qty')

    const [cart, setCart] = useState(initialState.cart)
    const [total, setTotal] = useState(initialState.total)

    useEffect(() => {
        saveToStorage('cart', cart)
    }, [cart])

    const newItem = (data, qty) => {
        data.qty = qty
        setCart([...cart, data])
    }

    const updItem = (item, data, qty) => {
        item.qty += qty
        const items = cart.filter(item => item.id !== data.id)
        setCart([...items, item])
    }

    const addItem = (data, qty) => {

        setTotal(total + qty)

        const item = cart.find(item => item.id === data.id)

        item
            ? updItem(item, data, qty)
            : newItem(data, qty)
    }

    const delItem = (id) => {
        const item = cart.find(item => item.id === id)
        setTotal(total - item.qty)

        const items = cart.filter(item => item.id !== id)
        setCart(items)
    }



    return (
        <CartContext.Provider
            value={ { cart, total, addItem, delItem } }>
            { children }
        </CartContext.Provider>
    )
}