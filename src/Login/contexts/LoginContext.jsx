import { createContext, useState } from 'react'

const initialState = {
    logged: true,
    user: undefined,
    waiting: false,
    register: false
}

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {

    const [status, setStatus] = useState(initialState)


    const login = () =>
        setStatus({ ...status, logged: true })

    const wait = () =>
        setStatus({ ...status, waiting: true })

    const error = () =>
        setStatus({ ...status, wait: false })

    const logout = () =>
        setStatus(initialState)

    const changeStatus = (e) => {
        e.preventDefault()
        setStatus({ ...status, register: !status.register })
    }

    const loginFirebase = async (user) => {

        if (!user) return

        const { displayName, isAnonymous, photoURL, email, uid } = await user

        uid && !isAnonymous && setStatus({
            ...status,
            logged: true,
            setUser: {
                nombre: displayName,
                img: photoURL,
                email,
                uid
            }
        })
    }

    return (
        <LoginContext.Provider
            value={ {
                loginFirebase,
                changeStatus,
                logout,
                login,
                error,
                status,
                wait
            } }>
            { children }
        </LoginContext.Provider>
    )
}