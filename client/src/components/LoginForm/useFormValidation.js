import { useState, useEffect } from "react";

export default function useFormValidation(initialState, validate, authenticateUser) {
	const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({ email: [], password: []});
  const [isSubmitting, setSubmitting] = useState(false);
  
  useEffect(() => {
    if(isSubmitting) {
      const noErrors = errors.email.length === 0 && errors.password.length === 0;
      if(noErrors) {
        authenticateUser();
        setSubmitting(false);
      } else {
        setSubmitting(false)
      }
    }
  },[errors])

	function handleChange(event) {
    const { name, value } = event.target;

		setValues({
			...values,
			[name]: value,
		});
  }

  function handleBlur() {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
  }
  
	return { handleSubmit, handleChange, handleBlur, values, errors, isSubmitting };
}
