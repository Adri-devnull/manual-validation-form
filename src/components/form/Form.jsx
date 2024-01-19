import { useState } from 'react';
import {
	StyledErrorContainer,
	StyledForm,
	StyledFormField,
	StyledFreeTrial,
	StyledIconError,
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
			name: {
				empty: false,
				wrong: false
			},
			surname: {
				empty: false,
				wrong: false
			},
			email: {
				empty: false,
				wrong: false
			},
			password: {
				empty: false,
				wrong: false
			}
		}
	});

	return (
		<StyledForm onSubmit={handleSubmit}>
			<StyledFormField>
				{(formValues.errors.name.empty || formValues.errors.name.wrong) && (
					<StyledIconError src='assets/images/icon-error.svg'></StyledIconError>
				)}
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
					{formValues.errors.name.empty && (
						<SytledErrorSpan>First Name cannot be empty</SytledErrorSpan>
					)}
					{formValues.errors.name.wrong && (
						<SytledErrorSpan>Invalid Name</SytledErrorSpan>
					)}
				</StyledErrorContainer>
			</StyledFormField>
			<StyledFormField>
				{(formValues.errors.surname.empty ||
					formValues.errors.surname.wrong) && (
					<StyledIconError src='assets/images/icon-error.svg'></StyledIconError>
				)}
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
					{formValues.errors.surname.empty && (
						<SytledErrorSpan>Surname cannot be empty</SytledErrorSpan>
					)}
					{formValues.errors.surname.wrong && (
						<SytledErrorSpan>Invalid Surname</SytledErrorSpan>
					)}
				</StyledErrorContainer>
			</StyledFormField>
			<StyledFormField>
				{(formValues.errors.email.empty || formValues.errors.email.wrong) && (
					<StyledIconError src='assets/images/icon-error.svg'></StyledIconError>
				)}
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
					{formValues.errors.email.empty && (
						<SytledErrorSpan>Email cannot be empty</SytledErrorSpan>
					)}
					{formValues.errors.email.wrong && (
						<SytledErrorSpan>Looks like this is not an email</SytledErrorSpan>
					)}
				</StyledErrorContainer>
			</StyledFormField>
			<StyledFormField>
				{(formValues.errors.password.empty ||
					formValues.errors.password.wrong) && (
					<StyledIconError src='assets/images/icon-error.svg'></StyledIconError>
				)}
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
					{formValues.errors.password.empty && (
						<SytledErrorSpan>Password cannot be empty</SytledErrorSpan>
					)}
					{formValues.errors.password.wrong && (
						<SytledErrorSpan>Incorrect password</SytledErrorSpan>
					)}
				</StyledErrorContainer>
			</StyledFormField>
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
			errors: {
				...formValues.errors,
				name: {
					...formValues.errors.name,
					wrong: correctName && valueWithoutSpaces,
					empty: !valueWithoutSpaces
				}
			}
		});
	} else if (name === 'surname') {
		const correctSurname = !regexForName.test(valueWithoutSpaces);
		setFormValues({
			...formValues,
			errors: {
				...formValues.errors,
				surname: {
					...formValues.errors.surname,
					wrong: correctSurname && valueWithoutSpaces,
					empty: !valueWithoutSpaces
				}
			}
		});
	} else if (name === 'email') {
		const correctEmail = !regexForEmail.test(valueWithoutSpaces);
		setFormValues({
			...formValues,
			errors: {
				...formValues.errors,
				email: {
					...formValues.errors.email,
					wrong: correctEmail && valueWithoutSpaces,
					empty: !valueWithoutSpaces
				}
			}
		});
	} else {
		const correctPassword = !regexForPassword.test(valueWithoutSpaces);
		setFormValues({
			...formValues,
			errors: {
				...formValues.errors,
				password: {
					...formValues.errors.password,
					wrong: correctPassword && valueWithoutSpaces,
					empty: !valueWithoutSpaces
				}
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
