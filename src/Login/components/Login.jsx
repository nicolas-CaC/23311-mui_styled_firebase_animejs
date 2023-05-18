import { useContext, useState } from "react"
import { emailSignin, emailSignup, signInWithGoogle } from "../../Global/firebase/providers/providers.js"
import { LoginContext } from "../contexts/LoginContext"
import { Sign } from "./Sign"


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



