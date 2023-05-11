import { useContext } from "react"
import { LoginContext } from "../contexts/LoginContext"
import { useState } from "react"
import { StyledForm } from "../styles/LoginStyles"

export const Login = () => {

    const { status, wait, error, changeStatus, loginFirebase: firebase } = useContext(LoginContext)

    const [form, setForm] = useState({ name: '', pass: '' })

    const checkForm = (e) => {
        e.preventDefault()
    }

    const googleSignin = async (e) => {
        e.preventDefault()
    }

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <Sign
            eventOnChange={ handleInputChange }
            eventOnClick={ checkForm }
            googleSignin={ googleSignin }
            waiting={ status.waiting }
            register={ status.register }
            changeStatus={ changeStatus }
        />
    )
}


const Sign = ({
    register,
    eventOnChange,
    eventOnClick,
    changeStatus,
    googleSignin,
    waiting }) =>
    <StyledForm>
        <input type="text" name='name' placeholder="Ingresa tu usuario" />
        <input type="text" name='pass' placeholder="Ingresa tu contraseña" />
    </StyledForm>