export default function validateForm(values) {
  const errors = {
    email: [],
    password: []
  };
  
  //email validation
	if (!values.email) {
		errors.email.push("Email is required");
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email.push("Invalid email address");
  }

  //password validation
  if (!values.password) {
    errors.password.push("Please enter a password");
  } else {
    if(values.password.length < 6) {
       errors.password.push("Password must be at least 6 characteres")
    } 
    if(!/(?=.*[a-z])/g.test(values.password)) {
       errors.password.push("Password must contain at least one small letter")
    } 
    if(!/(?=.*[A-Z])/g.test(values.password)) {
       errors.password.push("Password must contain at least one large letter")
    } 
    if(!/(?=.*\d)/g.test(values.password)) {
       errors.password.push("Password must contain at least one digit")
    } 
  }
	return errors;
}
