import { useContext } from "react"
import { LoginContext } from "../contexts/LoginContext"
import { Login } from "../components/Login"

export const LoginLayout = ({ children }) => {

    const { status } = useContext(LoginContext)

    return status.logged
        ? children
        : <Login />
}