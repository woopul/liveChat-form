export default function validateForm(values, touched) {
  const errors = {};

  //email validation
  if (touched.email) {
    if (!values.email) errors.email = "Email is required";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
  }

  //password validation
  if (touched.password) {
    if (!values.password) errors.password = "Please enter a password";
    else {
      if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characteres";
      } else if (
        !/(?=.*[a-z])/g.test(values.password) ||  //at least one small letter
        !/(?=.*[A-Z])/g.test(values.password) ||  //at least one big letter
        !/(?=.*\d)/g.test(values.password)) {     //at least one digi
        errors.password = "Password must contain at least one small letter, one big letter, and one digit"
      }
    }
  }
  return errors;
}
