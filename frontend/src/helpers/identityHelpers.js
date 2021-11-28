const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
export function validateLogin(values) {
  let errors = {};
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "Please enter a valid email";
  }
  if (!values.password) {
    errors.password = "Password is required!";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters long";
  }
  return errors;
}

export function validateRegister(values) {
  let errors = {};
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "Please enter a valid email";
  }
  if (!values.password || !values.reEnterPassword) {
    errors.password = "Password is required!";
  } else if (values.password.length < 6 || values.reEnterPassword.length < 6) {
    errors.password = "Password must be at least 6 characters long";
  } else if (values.password !== values.reEnterPassword) {
    errors.password = "Passwords don't match";
  }
  if (!values.firstName) {
    errors.firstName = "First name is required";
  }
  if (!values.lastName) {
    errors.lastName = "Last name is required";
  }
  return errors;
}
