import React, { useState } from "react";
import { connect } from 'react-redux';
import { signIn } from '../../actions';
import Button from "../Button";
import useFormValidation from "./useFormValidation";
import validateForm from "./validateForm";
import login from "../../api/mock";
import TextInputConrol from '../TextInputControl';
import Logo from "../../assets/logo/livechat_logo.svg";
import "./loginForm.scss";

const INITIAL_STATE = { email: "", password: "", rememberMe: true };

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
		try {
			await login(user)
				.then((res) => {
					signIn(res);
				})
				.catch((err) => {
					setAuthenticationError(err.message);
					setSubmitting(false);
					resetAuthError()
				});
		} catch (err) {
			setAuthenticationError(err.message);
			setSubmitting(false);
		}
	}

	const resetAuthError = () => {
		setTimeout(() => setAuthenticationError(null), 5000)
	}

	return (
		<div className="form-control-container">
			<h1>Login to <span className="company-title">LiveChat</span><img src={Logo} className="company-logo" /></h1>
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
					<label for='rememberMe' className="chk-container"> Remember Me
						<input value={formData.rememberMe} checked={formData.rememberMe} onChange={handleChange} id='rememberMe' name="rememberMe" type="checkbox" />
						<span className="checkmark" />
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
