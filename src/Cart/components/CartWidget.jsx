import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import { Box, Button, ButtonGroup } from "@mui/material"
import { useState } from "react"

export const CartWidget = ({ data }) => {

    const { addItem } = useContext(CartContext)
    const [qty, setQty] = useState(0)

    const buttonHandleClick = () => addItem(data, qty)

    const add = () => setQty(qty + 1)

    const subs = () => {
        if (qty <= 0) return;
        setQty(qty - 1)
    }


    return (
        <Box display='flex' flexDirection='column'>
            <ButtonGroup
                fullWidth
                variant="contained"
                sx={ { margin: '5px 0' } }
            >
                <Button onClick={ subs }>-</Button>
                <Button variant="outlined">{ qty }</Button>
                <Button onClick={ add }>+</Button>
            </ButtonGroup>

            <Button
                disabled={ qty === 0 ? true : false }
                variant="contained"
                onClick={ buttonHandleClick }
            >
                Agregar al Carrito
            </Button>
        </Box>
    )
}