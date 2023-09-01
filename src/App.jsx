import { useState } from 'react';
import SignupForm from './signupForm';
import SuccessForm from './successForm';
import './App.css';

function App() {
	const [success, setSuccess] = useState(false);
	const [email, setEmail] = useState('');

	return success ? (
		<SuccessForm
			email={email}
			setEmail={setEmail}
			success={success}
			setSuccess={setSuccess}
		></SuccessForm>
	) : (
		<SignupForm
			email={email}
			setEmail={setEmail}
			success={success}
			setSuccess={setSuccess}
		></SignupForm>
	);
}

export default App;
