import { useState } from 'react';
import {
	StyledErrorContainer,
	StyledForm,
	StyledFreeTrial,
	StyledInput,
	StyledSpanLigther,
	StyledSpanWeight,
	StyledSpansContainer,
	SytledErrorSpan
} from './styles';

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
		<StyledForm onSubmit={handleSubmit}>
			<div>
				<label htmlFor='name'></label>
				<StyledInput
					type='text'
					id='name'
					name='name'
					placeholder='First Name'
					onChange={event =>
						changeFormValues(event.target, formValues, setFormValues)
					}
				/>
				<StyledErrorContainer>
					{formValues.errors.name && (
						<SytledErrorSpan>First Name cannot be empty</SytledErrorSpan>
					)}
				</StyledErrorContainer>
			</div>
			<div>
				<label htmlFor='surname'></label>
				<StyledInput
					type='text'
					id='surname'
					name='surname'
					placeholder='Last Name'
					onChange={event =>
						changeFormValues(event.target, formValues, setFormValues)
					}
				/>
				<StyledErrorContainer>
					{formValues.errors.surname && (
						<SytledErrorSpan>Surname cannot be empty</SytledErrorSpan>
					)}
				</StyledErrorContainer>
			</div>
			<div>
				<label htmlFor='email'></label>
				<StyledInput
					type='text'
					id='email'
					name='email'
					placeholder='Email Address'
					onChange={event =>
						changeFormValues(event.target, formValues, setFormValues)
					}
				/>
				<StyledErrorContainer>
					{formValues.errors.email && (
						<SytledErrorSpan>Look like this is not an email</SytledErrorSpan>
					)}
				</StyledErrorContainer>
			</div>
			<div>
				<label htmlFor='password'></label>
				<StyledInput
					type='password'
					id='password'
					name='password'
					placeholder='Password'
					onChange={event =>
						changeFormValues(event.target, formValues, setFormValues)
					}
				/>
				<StyledErrorContainer>
					{formValues.errors.password && (
						<SytledErrorSpan>Password cannot be empty</SytledErrorSpan>
					)}
				</StyledErrorContainer>
			</div>
			<div>
				<StyledFreeTrial type='submit' value='CLAIM YOUR FREE TRIAL' />
			</div>
			<StyledSpansContainer>
				<StyledSpanLigther>
					By clicking the button, you are agreeing to our{' '}
				</StyledSpanLigther>
				<StyledSpanWeight>Terms and Services</StyledSpanWeight>
			</StyledSpansContainer>
		</StyledForm>
	);
};

const formValidation = (name, value, formValues, setFormValues) => {
	const valueWithoutSpaces = value.trim();
	const regexForName = /^[a-zA-Z]+$/;
	const regexForEmail =
		/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
	const regexForPassword =
		/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
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
	} else if (name === 'email') {
		const correctEmail = !regexForEmail.test(valueWithoutSpaces);
		setFormValues({
			...formValues,
			errors: {
				...formValues.errors,
				email: correctEmail
			}
		});
	} else {
		const correctPassword = !regexForPassword.test(valueWithoutSpaces);
		setFormValues({
			...formValues,
			errors: {
				...formValues.errors,
				password: correctPassword
			}
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

// Dígitos, minúsculas y mayúsculas y símbolos
