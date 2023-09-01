import { useState } from 'react';

function SignupForm({ success, setSuccess, email, setEmail }) {
	return (
		<div className='container'>
			<img src='/illustration-sign-up-desktop.svg' className='img-lg' alt='' />
			<img src='/illustration-sign-up-mobile.svg' className='img-sm' alt='' />
			<form
				action=''
				onSubmit={e => {
					e.preventDefault();
					setSuccess(!success);
				}}
			>
				<h2>Stay updated!</h2>
				<p>Join 60,000+ product managers receiving monthly updates on:</p>
				<ul>
					<li>
						<span className='material-symbols-outlined'>check</span>
						<p>Product discovery and building what matters</p>
					</li>
					<li>
						<span className='material-symbols-outlined'>check</span>
						<p>Measuring to ensure updates are a success</p>
					</li>
					<li>
						<span className='material-symbols-outlined'>check</span>
						<p>And much more!</p>
					</li>
				</ul>
				<label htmlFor='email'>Email Address</label>
				<input
					type='email'
					name=''
					id='email'
					placeholder='email@company.com'
					value={email}
					onChange={e => setEmail(e.target.value)}
					required
				/>
				<button type='submit'>Subscribe to monthly newsletter</button>
			</form>
		</div>
	);
}

export default SignupForm;
