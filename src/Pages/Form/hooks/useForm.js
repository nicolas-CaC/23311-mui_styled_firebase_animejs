import { useState } from "react";
import { checkForm } from "../utilities/checkForm";
import { setErrorDOM } from "../utilities/setErrorDOM";

const initialState = {
    name: '',
    email: '',
    age: ''
}

export const useForm = (refs) => {

    const [form, setForm] = useState(initialState)

    const submitHandleClick = (e) => {
        e.preventDefault();
        const result = checkForm(form)
        setErrorDOM(result, refs)
        // result.error && 
        // fetch('/api/contacto')
    }

    const inputHandleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    return { form, submitHandleClick, inputHandleChange }
}
