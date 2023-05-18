import { useFetch } from "../../../Global/hooks/useFetch"
import { Box, ImageList, ImageListItem, ImageListItemBar, Skeleton } from "@mui/material"
import { Link } from "react-router-dom"

const url = 'https://fakestoreapi.com/products'

const card = {
    width: '210px',
    margin: '0.5em'
}

const box = {
    backgroundColor: 'rgba(0,0,0,20%)',
    borderRadius: '7.5px',
    padding: '30px'
}



export const Items = () => {

    const { data, loading } = useFetch(url)

    return (
        <ItemsContainer>
            { loading
                ? <ItemsLoading />
                : <ItemsList data={ data } />
            }
        </ItemsContainer>
    )
}




const ItemsContainer = ({ children }) =>
    <div style={ { display: 'flex', justifyContent: 'center' } }>
        { children }
    </div>




const ItemsList = ({ data }) =>
    <ImageList cols={ 3 } sx={ box }>
        { data.map(item =>
            <ItemList
                key={ item.id }
                { ...item } />) }
    </ImageList>




const ItemList = ({ id, image, title, price }) =>
    <Link to={ `/productos/${id}` }>
        <ImageListItem sx={ card }>
            <img
                src={ image }
                style={ { height: '300px' } } />
            <ImageListItemBar
                title={ title }
                subtitle={ price }
            />
        </ImageListItem>
    </Link>




const ItemsLoading = () =>
    <ImageList cols={ 3 }>
        { Array.from(new Array(21))
            .map((_, index) =>
                <ItemLoading key={ index } />)
        }
    </ImageList>




const ItemLoading = () =>
    <ImageListItem sx={ card }>
        <Skeleton
            variant="rectangular"
            width={ 210 }
            height={ 118 }
        />
        <Box sx={ { pt: 0.5 } }>
            <Skeleton width='100%' />
            <Skeleton width='100%' />
        </Box>
    </ImageListItem>

