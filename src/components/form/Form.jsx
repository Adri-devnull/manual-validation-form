import { useState } from 'react';

const Form = () => {
	const [formValues, setFormValues] = useState({
		name: '',
		surname: '',
		email: '',
		password: '',
		errors: {
			name: false,
			surname: false,
			email: false,
			password: false
		}
	});

	console.log(formValues.errors);
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor='name'></label>
				<input
					type='text'
					id='name'
					name='name'
					placeholder='First Name'
					onChange={event =>
						changeFormValues(event.target, formValues, setFormValues)
					}
				/>
			</div>
			<div>
				<label htmlFor='surname'></label>
				<input
					type='text'
					id='surname'
					name='surname'
					placeholder='Last Name'
					onChange={event =>
						changeFormValues(event.target, formValues, setFormValues)
					}
				/>
			</div>
			<div>
				<label htmlFor='email'></label>
				<input
					type='text'
					id='email'
					name='email'
					placeholder='Email Address'
					onChange={event =>
						changeFormValues(event.target, formValues, setFormValues)
					}
				/>
			</div>
			<div>
				<label htmlFor='password'></label>
				<input
					type='password'
					id='password'
					name='password'
					placeholder='Password'
					onChange={event =>
						changeFormValues(event.target, formValues, setFormValues)
					}
				/>
			</div>
			<div>
				<input type='submit' value='CLAIM YOUR FREE TRIAL' />
			</div>
			<div>
				<span>By clicking the button, you are agreeing to our </span>
				<span>Terms and Services</span>
			</div>
		</form>
	);
};

const formValidation = (name, value, formValues, setFormValues) => {
	const valueWithoutSpaces = value.trim();
	const regexForName = /^[a-zA-Z]+$/;
	if (name === 'name') {
		const correctName = !regexForName.test(valueWithoutSpaces);
		setFormValues({
			...formValues,
			errors: { ...formValues.errors, name: correctName }
		});
	} else if (name === 'surname') {
		const correctSurname = !regexForName.test(valueWithoutSpaces);
		setFormValues({
			...formValues,
			errors: { ...formValues.errors, surname: correctSurname }
		});
	}
};

const changeFormValues = (input, formValues, setFormValues) => {
	const { name, value } = input;
	setFormValues({ ...formValues, [name]: value });
	formValidation(name, value, formValues, setFormValues);
};

const handleSubmit = event => {
	event.preventDefault();
};

export default Form;

// ^(?:(?!@)[\w!#$%&'*+/=?^_`{|}~-]+(?:\.(?:(?!@)[\w!#$%&'*+/=?^_`{|}~-]+)*)*|"(?:(?:(?!")[\x00-\x20\x7F]|\\[\x00-\x7F])|\\[\x00-\x7F])*")@(?:[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*)*(?:\.[a-zA-Z]{2,})+$
