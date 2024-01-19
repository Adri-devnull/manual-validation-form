import styled from 'styled-components';

const StyledMain = styled.main`
	background-image: url('assets/images/bg-intro-mobile.png');
	background-color: #ff7979;
	padding: 60px 30px;
	display: flex;
	flex-direction: column;
	gap: 30px;

	@media screen and (min-width: 1024px) {
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}
`;

export { StyledMain };
