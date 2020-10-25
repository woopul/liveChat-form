import React, { useState } from "react";
import Button from "../Button";
import useFormValidation from "./useFormValidation";
import validateForm from "./validateForm";
import login from "../../api/mock";
import TextInputConrol from '../TextInputControl';
import "./loginForm.scss";

const INITIAL_STATE = { email: "", password: "" };

const LoginForm = () => {
	const {
		handleSubmit,
		handleChange,
		handleBlur,
		formData,
		errors,
		isSubmitting,
		setSubmitting,
		touched
	} = useFormValidation(INITIAL_STATE, validateForm, authenticateUser);
	const [authenticationError, setAuthenticationError] = useState(null);

	async function authenticateUser() {
		const user = formData;
		try {
			await login(user)
				.then((res) => console.log(res))
				.catch((err) => {
					console.log(err);
					setAuthenticationError(err.message);
					setSubmitting(false);
				});
		} catch (err) {
			console.error("Auth error", err);
			setAuthenticationError(err.message);
			setSubmitting(false);
		}
	}
	
	return (
		<div className="form-control-container">
			<h1>Login to LiveChat</h1>
			<form onSubmit={handleSubmit}>
				<TextInputConrol
					name="email"
					type="text"
					handleChange={handleChange}
					handleBlur={handleBlur}
					value={formData.email}
					errors={errors}
					touched={touched}
				/>
				<TextInputConrol 
					name="password"
					type="password"
					handleChange={handleChange}
					handleBlur={handleBlur}
					value={formData.password}
					errors={errors}
					touched={touched}
				/>
				<Button disabled={Object.keys(errors).length ? "disabled" : ""} />

				{isSubmitting && <p>CHECKING FOR USER</p>}
				{authenticationError && (
					<p className="error-msg">{authenticationError}</p>
				)}
			</form>
		</div>
	);
}

export default LoginForm;
