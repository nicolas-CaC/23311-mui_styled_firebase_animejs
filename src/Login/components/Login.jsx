import { useContext, useState } from "react"
import { StyledButton, StyledForm, StyledInput, StyledTitle } from "../styles/LoginStyles"
import { emailSignin, emailSignup, signInWithGoogle } from "../../Global/firebase/providers/providers.js"
import { LoginContext } from "../contexts/LoginContext"
import { loginData } from "../data/loginData"


export const Login = () => {

    const { status, wait, error, changeStatus, loginFirebase: firebase } = useContext(LoginContext)

    const [form, setForm] = useState({ name: '', pass: '' })

    const checkForm = (e) => {
        e.preventDefault()
        wait()

        const completeForm =
            form.name !== '' &&
            form.pass !== ''

        !completeForm && alert('complete los campos')
        !completeForm && error()

        if (!completeForm) return

        const user =
            status.register
                ? emailSignup(form.name, form.pass)
                : emailSignin(form.name, form.pass, error)

        user
            .then(res => firebase(res))
    }

    const googleSignin = async (e) => {
        e.preventDefault()
        wait()
        const user = await signInWithGoogle(error)
        firebase(user)
    }

    const handleInputChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value })



    return <Sign
        eventOnChange={ handleInputChange }
        eventOnClick={ checkForm }
        googleSignin={ googleSignin }
        waiting={ status.waiting }
        register={ status.register }
        changeStatus={ changeStatus }
    />
}



const Sign = ({
    register,
    eventOnChange,
    eventOnClick,
    changeStatus,
    googleSignin,
    waiting }) =>

    <StyledForm register={ register }>
        <StyledTitle>{
            register
                ? loginData.register.title
                : loginData.login.title }
        </StyledTitle>

        <StyledInput
            name="name"
            type="text"
            placeholder={ register
                ? loginData.register.inputUser
                : loginData.login.inputUser }
            onChange={ eventOnChange }
        />
        <StyledInput
            name="pass"
            type="password"
            placeholder={ register
                ? loginData.register.inputPass
                : loginData.login.inputPass }
            onChange={ eventOnChange }
        />

        <StyledButton
            disabled={ waiting }
            onClick={ eventOnClick }>
            { register
                ? loginData.register.button
                : loginData.login.button }
        </StyledButton>

        <StyledButton
            changeButton
            disabled={ waiting }
            onClick={ changeStatus }>
            { register
                ? loginData.register.changeStatus
                : loginData.login.changeStatus }
        </StyledButton>

        <StyledButton
            google
            disabled={ waiting }
            onClick={ googleSignin }>
            Loguearme con cuenta Google
        </StyledButton>
    </StyledForm>