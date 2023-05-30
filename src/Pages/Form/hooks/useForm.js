import { useState } from "react";

const initialState = {
    name: '',
    email: '',
    age: ''
}

export const useForm = (refs) => {

    const [form, setForm] = useState(initialState)

    const submitHandleClick = (e) => {
        e.preventDefault();
        console.log('Valores finales:', form);
    }

    const inputHandleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    return { form, submitHandleClick, inputHandleChange }
}
