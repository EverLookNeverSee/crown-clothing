import {useState} from "react";
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const {displayName, email, password, confirmPassword} = formFields;
	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};
	const handleSubmit = async event => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert("Password do not match!");
			return;
		}
		try {
			const {user} = await createAuthUserWithEmailAndPassword(email, password);
			await createUserDocumentFromAuth(user, {displayName});
			resetFormFields();
		} catch (e) {
			if (e.code === "auth/email-already-in-use") {
				alert("Cannot create user: Email already in use!");
			} else {
				console.error(`User creation encountered an error: ${e}`);
			}
		}
	};
	const handleChange = event => {
		const {name, value} = event.target;
		setFormFields({...formFields, [name]: value});
	};
	return (
		<div>
			<h1>Sign up with your email and password</h1>
			<form onSubmit={handleSubmit}>
				<label>Display Name</label>
				<input
					required={true}
					type="text"
					onChange={handleChange}
					name="displayName"
					value={displayName}
				/>
				<label>Email</label>
				<input
					required={true}
					type="email"
					onChange={handleChange}
					name="email"
					value={email}
				/>
				<label>Password</label>
				<input
					required={true}
					type="password"
					onChange={handleChange}
					name="password"
					value={password}
				/>
				<label>Confirm Password</label>
				<input
					required={true}
					type="password"
					onChange={handleChange}
					name="confirmPassword"
					value={confirmPassword}
				/>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
};

export default SignUpForm;
