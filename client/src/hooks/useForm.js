import { useEffect, useState } from "react";

export function useForm(initialValues, submitCallback, validate) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

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
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
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
    };

    return {
        values,
        errors,
        changeHandler,
        submitHandler,
        setValues
    };
}
