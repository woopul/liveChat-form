import React, { useState } from "react";

import useFormValidation from "./useFormValidation";
import validateForm from "./validateForm";
import login from "../../api/mock";
import "./loginForm.scss";

const INITIAL_STATE = { email: "", password: "" };

export default function LoginForm() {
	const {
		handleSubmit,
		handleChange,
		handleBlur,
		values,
		errors,
    isSubmitting,
	} = useFormValidation(INITIAL_STATE, validateForm, authenticateUser);
	const [authenticationError, setAuthenticationError] = useState(null);

	async function authenticateUser() {
		const user = values;
		try {
			await login(user)
				.then((res) => console.log(res))
				.catch((err) => {
					console.log(err);
					setAuthenticationError(err.message);
				});
		} catch (err) {
			console.error("Auth error", err);
			setAuthenticationError(err.message);
		}
	}

	return (
		<div className="form-control-container">
			<h1>Login to LiveChat</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="emailInput">email</label>
				<input
					name="email"
					type="text"
          id="emailInput"
					className={errors.email.length > 0 && "error-input"}
					onChange={handleChange}
					onBlur={handleBlur}
					value={values.email}
				/>
				{errors.email && <p className="error-msg">{errors.email}</p>}

				<label htmlFor="passwordInput">password</label>
				<input
					name="password"
					type="password"
          id="passwordInput"
					className={errors.password.length > 0 && "error-input"}
					onBlur={handleBlur}
					onChange={handleChange}
					value={values.password}
				/>
				{errors.password &&
					errors.password.map((errMsg) => (
						<p className="error-msg">{errMsg}</p>
					))}
				{/* <ButtonRipple /> */}
				<button
					className="ripple-button-login"
					disabled={isSubmitting}
					type="submit"
				>
					Sign In
				</button>

				{isSubmitting && <p>CHECKING FOR USER</p>}
				{authenticationError && (
					<p className="error-msg">{authenticationError}</p>
				)}
			</form>
		</div>
	);
}
