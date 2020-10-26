import React, { useState } from "react";
import { connect } from 'react-redux';
import { signIn } from '../../actions';
import Button from "../Button";
import useFormValidation from "./useFormValidation";
import validateForm from "./validateForm";
import login from "../../api/mock";
import TextInputConrol from '../TextInputControl';
import "./loginForm.scss";

const INITIAL_STATE = { email: "", password: "" };

const LoginForm = ({ signIn }) => {
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
		console.log('validate with data', user)
		try {
			await login(user)
				.then((res) => {
					console.log(res);
					signIn(res);
				})
				.catch((err) => {
					setAuthenticationError(err.message);
					setSubmitting(false);
					resetForm()
				});
		} catch (err) {
			console.error("Auth error", err);
			setAuthenticationError(err.message);
			setSubmitting(false);
		}
	}

	const resetForm = () => {
		setTimeout(() => setAuthenticationError(null), 5000)
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

				<div className="button-container">
					<label className="chk-container"> Remember Me
						<input type="checkbox"/>
						<span type="chkmark"/>
					</label>
					<Button
						type="submit"
						text="Sign In"
						disabled={Object.keys(errors).length || isSubmitting ? "disabled" : ""}
					/>
				</div>

				{authenticationError && (
					<p className="error-msg">{authenticationError}</p>
				)}
			</form>
		</div>
	);
}

export default connect(null, { signIn })(LoginForm);
