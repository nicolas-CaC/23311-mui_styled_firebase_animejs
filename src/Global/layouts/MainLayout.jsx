import { Grid } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { getTempStorage, setTempStorage } from "../utilities/storage";
import { useEffect } from "react";

export const MainLayout = ({ children }) => {

    const navigate = useNavigate()
    const refresh = getTempStorage('actualUrl')

    const refreshSite = () =>
        refresh !== undefined &&
        refresh !== null &&
        refresh !== '/' &&
        navigate(refresh)

    const actualUrl = () =>
        setTempStorage('actualUrl', window.location.pathname)


    useEffect(() => {

        window.addEventListener('click', actualUrl)
        refreshSite()

        return () =>
            window.removeEventListener('click', actualUrl)

    }, [])


    return (
        <Grid container
            sx={ {
                width: '100%',
                alignContent: 'center',
                justifyContent: 'center',
                minHeight: 'calc(100vh - 64px)',
            } }
        >
            { children }
        </Grid>
    )
}