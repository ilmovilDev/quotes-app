import { useState } from "react"

export const useForm = (initialState) => {

    const [formState, setFormState] = useState(initialState);

    function handleChange({ target }) {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    function handleReset() {
        setFormState(initialState)
    }

    return {
        ...formState,
        formState,
        handleChange,
        handleReset
    }
}
