import { Box, CircularProgress, Grid, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import AlertDialog from "../../../Global/components/AlertDialog"
import { useFetch } from "../../../Global/hooks/useFetch"

const url = (id) => `https://fakestoreapi.com/products/${id}`

export const Item = () => {

    const { id } = useParams()
    const { loading, data } = useFetch(url(id))

    return (
        <Box
            padding='auto'
            display='flex'
            margin='auto auto'
            alignItems='center'
            justifyContent='center'
            minHeight='inherit'
        >
            { loading
                ? <CircularProgress color='primary' />
                : data.error
                    ? <AlertDialog
                        title='Error con la API'
                        text='No se encuentra el producto solicitado' />
                    : <Card data={ data } />
            }
        </Box>
    )
}

// CARD

const container = {
    width: 'inherit',
    minHeight: 'inherit'
}

const imageStyle = {
    width: '100%',
    height: '100%',
    padding: '5em',
    objectFit: 'contain'
}

const descriptionStyle = {
    height: 'inherit',
    textAlign: 'justify',
    backgroundColor: 'rgba(0,0,0,10%)'


}

const Card = ({ data }) => {

    const { image, title, price, description, category, rating } = data

    return (
        <Grid container
            columns={ 12 }
            columnSpacing={ 5 }
            sx={ container }
        >
            <Grid item
                xs={ 12 } md={ 6 }
                sx={ { height: 'inherit' } }
            >
                <img
                    src={ image }
                    style={ imageStyle } />
            </Grid>

            <Grid item
                xs={ 12 } md={ 6 }
                sx={ { ...imageStyle, ...descriptionStyle } }>
                <Grid container spacing={ 3 } direction='column'>
                    <Grid item>
                        <Typography variant="h4">{ title }</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5">{ category }</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1">
                            (stock: { rating.count }u.)
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant="p"
                            paragraph>
                            { description }
                        </Typography>
                    </Grid>
                    <Grid item sx={
                        {
                            margin: '0 auto',
                            textAlign: 'center'
                        } }>
                        <Typography variant="h5">
                            ${ price }
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>


        </Grid>
    )
}