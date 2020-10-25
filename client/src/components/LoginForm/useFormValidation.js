import { useState, useEffect } from "react";

export default function useFormValidation(initialState, validate, authenticateUser) {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setSubmitting] = useState(false);
  const [touched, setTouched] = useState({});

  useEffect(() => {
      const validationErrors = validate(formData);
      setErrors(validationErrors);
  }, [formData]);

  // useEffect(() => {
  //   if (isSubmitting) {
  //     const noErrors = errors.email.length === 0 && errors.password.length === 0;
  //     if (noErrors) {
  //       authenticateUser();
  //       setSubmitting(false);
  //     } else {
  //       setSubmitting(false)
  //     }
  //   }
  // }, [errors])

  const handleChange = ({ target: { value, name } }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleBlur = ({ target: { value, name } }) => {
    setTouched({ ...touched, [name]: true });
    setFormData({...formData})
  }

  const handleSubmit = (event) => {
    console.log("IN HANDLE SUBMIT")
    event.preventDefault();
    setSubmitting(true);
    authenticateUser();
  }

  return { handleSubmit, handleChange, handleBlur, formData, errors, touched, isSubmitting, setSubmitting };
}
