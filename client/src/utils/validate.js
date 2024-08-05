export const validate = (values) => {
    const errors = {};

    if (!values.email) {
        errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid.";
    }

    if (!values.password) {
        errors.password = "Password is required.";
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters.";
    }

    if (!values.rePassword) {
        errors.rePassword = "Please confirm your password.";
    } else if (values.password !== values.rePassword) {
        errors.rePassword = "Passwords do not match.";
    }

    if (!values.firstName) {
        errors.firstName = "First name is required.";
    }

    if (!values.lastName) {
        errors.lastName = "Last name is required.";
    }

    if (!values.country) {
        errors.country = "Country is required.";
    }

    console.log("Validation errors", errors); // Log validation errors
    return errors;
};
