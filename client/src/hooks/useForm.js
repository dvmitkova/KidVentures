import { useEffect, useState } from "react";

export function useForm(initialValues, submitCallback, validate) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setValues(initialValues);
    }, [initialValues]);

    useEffect(() => {
        if (validate) {
            setErrors(validate(values));
        }
    }, [values, validate]);

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setValues(state => ({
            ...state,
            [name]: value
        }));
        setTouched(state => ({
            ...state,
            [name]: true
        }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        if (validate) {
            const validationErrors = validate(values);
            setErrors(validationErrors);

            if (Object.keys(validationErrors).length > 0) {
                return; 
            }
        }

        await submitCallback(values);
        setValues(initialValues);
        setTouched({}); 
    };

    return {
        values,
        errors,
        changeHandler,
        submitHandler,
        setValues,
        touched
    };
}
