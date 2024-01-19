import styled from 'styled-components';

const StyledForm = styled.form`
	border-radius: 10px;
	background: #fff;
	box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;
	padding: 20px;

	@media screen and (min-width: 1024px) {
		width: 540px;
		height: 474px;
		gap: 20px;
		justify-content: center;
	}
`;

const StyledInput = styled.input`
	height: 40px;
	width: 270px;
	border-radius: 5px;
	border: 1px solid #dedede;
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;

	&::placeholder {
		padding-left: 10px;
		font-weight: bold;
	}

	@media screen and (min-width: 1024px) {
		width: 460px;
		height: 50px;
		font-size: 1.2em;

		&::placeholder {
			padding-left: 20px;
			font-weight: bold;
			font-size: 14px;
		}

		&:focus {
			outline: none;
			border: 1px solid #ff7979;
			background-color: #ffe6e6;
		}
	}
`;

const StyledIconError = styled.img`
	position: absolute;
	right: 1rem;
	top: 0.8rem;
	width: 20px;
	height: 20px;
`;

const StyledFreeTrial = styled.input`
	position: relative;
	width: 279px;
	height: 56px;
	border-radius: 5px;
	background: #38cc8b;
	box-shadow: 0px -4px 0px 0px rgba(0, 0, 0, 0.09) inset;
	border: none;
	color: #fff;
	font-size: 15px;
	font-weight: 600;
	line-height: 26px;
	letter-spacing: 1px;

	@media screen and (min-width: 1024px) {
		width: 465px;
		cursor: pointer;
	}
`;

const StyledFormField = styled.div`
	position: relative;
`;

const StyledSpansContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	@media screen and (min-width: 1024px) {
		flex-direction: row;
		word-spacing: 0.2em;
		gap: 5px;
	}
`;

const StyledSpanLigther = styled.span`
	color: #bab7d4;
	font-size: 11px;
	font-weight: 500;
	line-height: 21px;
`;

const StyledSpanWeight = styled.span`
	color: #ff7979;
	font-size: 11px;
	font-weight: 700;
	line-height: 21px;
	cursor: pointer;
`;

const SytledErrorSpan = styled.span`
	color: #ff7979;
	text-align: right;
	font-size: 11px;
	font-style: italic;
	font-weight: 500;
`;

const StyledErrorContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export {
	StyledForm,
	StyledInput,
	StyledFreeTrial,
	StyledSpanLigther,
	StyledSpanWeight,
	StyledSpansContainer,
	SytledErrorSpan,
	StyledErrorContainer,
	StyledIconError,
	StyledFormField
};
