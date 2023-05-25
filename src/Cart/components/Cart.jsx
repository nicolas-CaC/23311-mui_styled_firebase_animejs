import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import { Button, Chip, Grid, Typography } from "@mui/material"
import { Delete } from "@mui/icons-material"

const url = (id) => `https://fakestoreapi.com/products/${id}`

export const Cart = () => {

    const { total, cart, delItem } = useContext(CartContext)

    return (
        <Grid container sx={ { justifyContent: 'center' } }>
            { total > 0
                ? <CartList cart={ cart } delItem={ delItem } />
                : <Chip label='No hay productos en el carrito' /> }

            { total > 0 && <Total cart={ cart } /> }
        </Grid>
    )
}


const container = (index) => {

    const par = 'rgba(0,0,0,30%)'
    const impar = 'rgba(0,0,0,15%)'

    return {
        backgroundColor: index % 2 === 0 ? par : impar,
        padding: '10px',
        alignItems: 'center'
    }
}


// CARRITO

export const CartList = ({ cart, delItem }) =>
    cart.map(({ id, image, title, category, price, rating, qty }, index) =>
        <Grid container
            key={ id }
            columns={ 12 }
            columnGap={ 5 }
            sx={ container(index) }
        >
            <Grid item xs={ 1 }>
                <img
                    src={ image }
                    width={ 100 }
                    height={ 100 }
                    style={ { objectFit: 'contain' } }
                />
            </Grid>

            <Grid item xs={ 6 }>
                <Typography variant="h6">{ title }</Typography>
                <Typography variant="p">{ category }</Typography>
                <Typography variant="body1">Cantidad: { qty }</Typography>
            </Grid>

            <Grid item xs={ 1 }>
                <Typography variant="p">Precio:</Typography>
                <Typography variant="h6">{ price.toFixed(2) }</Typography>
                <Typography variant="p">Stock:</Typography>
                <Typography
                    variant="h6"
                    color={ rating.count > qty ? 'green' : 'red' }>
                    { rating.count }
                </Typography>
            </Grid>

            <Grid item xs={ 1 }>
                <Typography variant="p">Subtotal:</Typography>
                <Typography variant="h6">{ (price * qty).toFixed(2) }</Typography>
            </Grid>

            <Grid item xs={ 1 }>
                <Button
                    color='error'
                    onClick={ () => delItem(id) }>
                    <Delete />
                </Button>
            </Grid>
        </Grid>
    )




// TOTAL

export const Total = ({ cart }) => {

    const total =
        cart.reduce((accum, item) =>
            accum += item.price * item.qty, 0)

    return (
        <Grid item sx={ {
            width: '100%',
            textAlign: 'end',
            margin: '0.5em'
        } }>
            <Typography
                variant="h5"
                sx={ { fontWeight: 'bold' } }>
                Total: ${ total.toFixed(2) }
            </Typography>
        </Grid>
    )
}