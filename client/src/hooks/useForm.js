import { useEffect, useState } from "react";

export function useForm(initialValues, submitCallback, validate) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({}); // Add touched state

    // Reinitialize form
    useEffect(() => {
        setValues(initialValues);
    }, [initialValues]);

    // Validate values on change
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
                console.log("Validation failed", validationErrors); // Log validation errors
                return; // Prevent form submission if there are validation errors
            }
        }

        console.log("Submitting form", values); // Log form submission values
        await submitCallback(values);
        setValues(initialValues);
        setTouched({}); // Reset touched state after successful submission
    };

    return {
        values,
        errors,
        changeHandler,
        submitHandler,
        setValues,
        touched // Return touched state
    };
}
