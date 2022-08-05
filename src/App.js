import { useState } from "react";

import "./App.css";

function App() {
	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		email: "",
	});

	const [submitted, setSubmitted] = useState(false);
	const [valid, setValid] = useState(false);

	const handleFirstNameInputChange = (e) => {
		setValues({ ...values, firstName: e.target.value });
	};

	const handleLastNameInputChange = (e) => {
		setValues({ ...values, lastName: e.target.value });
	};

	const handleEmailInputChange = (e) => {
		setValues({ ...values, email: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (values.firstName && values.lastName && values.email) {
			setValid(true);
		}
		setSubmitted(true);
	};

	return (
		<div className="container">
			<div className="form-container">
				<form onSubmit={handleSubmit} className="register-form">
					{submitted && valid ? (
						<div className="message">Success! Thank you for registering</div>
					) : null}
					<input
						onChange={handleFirstNameInputChange}
						value={values.firstName}
						className="form-field"
						placeholder="First Name"
						name="firstName"
					/>
					{submitted && !values.firstName ? (
						<span>Please enter a first name</span>
					) : null}
					<input
						onChange={handleLastNameInputChange}
						value={values.lastName}
						className="form-field"
						placeholder="Last Name"
						name="lastName"
					/>
					{submitted && !values.lastName ? (
						<span>Please enter a last name</span>
					) : null}
					<input
						onChange={handleEmailInputChange}
						value={values.email}
						className="form-field"
						placeholder="Email"
						name="email"
					/>
					{submitted && !values.email ? <span>Please enter email</span> : null}
					<button className="form-field btn">Register</button>
				</form>
			</div>
		</div>
	);
}

export default App;
