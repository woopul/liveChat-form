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

  const handleChange = ({ target: { type, value, name } }) => {
    if (type === "checkbox") { setFormData(prevState=>({ ...prevState, [name]: !prevState[name] }))}
    else {
    setFormData({
      ...formData,
      [name]: value,
    });
  }
}

const handleBlur = ({ target: { value, name } }) => {
  setTouched({ ...touched, [name]: true });
  setFormData({ ...formData })
}

const handleSubmit = (event) => {
  event.preventDefault();
  setSubmitting(true);
  authenticateUser();
}

return { handleSubmit, handleChange, handleBlur, formData, errors, touched, isSubmitting, setSubmitting };
}
