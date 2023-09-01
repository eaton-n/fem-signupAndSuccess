function SuccessForm({ email, success, setSuccess, setEmail }) {
	return (
		<div className='success'>
			<img className='success-icon' src='/icon-success.svg' alt='' />
			<h2>Thanks for subscribing!</h2>
			<p>
				A confirmation email has been sent to{' '}
				<span className='email'>{email}</span>. Please open it and click the
				button inside to confirm your subscription.
			</p>

			<button
				className='success-btn'
				onClick={() => {
					setEmail('');
					setSuccess(!{ success });
				}}
			>
				Dismiss message
			</button>
		</div>
	);
}

export default SuccessForm;
