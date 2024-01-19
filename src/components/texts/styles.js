import styled from 'styled-components';

const StyledTitle = styled.h2`
	color: #fff;
	text-align: center;
	font-size: 28px;
	font-style: normal;
	font-weight: 700;
	line-height: 36px;
	letter-spacing: -0.292px;

	@media screen and (min-width: 1024px) {
		color: #fff;
		font-size: 50px;
		font-weight: 700;
		line-height: 55px;
		letter-spacing: -0.521px;
		text-align: start;
	}
`;

const SyledContentContainer = styled.div`
	@media screen and (min-width: 1024px) {
		width: 525px;
	}
`;

const StyledTextContainer = styled.div`
	padding-bottom: 40px;
`;

const StyledText = styled.p`
	color: #fff;
	text-align: center;
	font-weight: 500;
	line-height: 26px;
	@media screen and (min-width: 1024px) {
		text-align: start;
	}
`;

const StyledButtonFree = styled.div`
	border-radius: 10px;
	background: #5e54a4;
	box-shadow: 0px 8px 0px 0px rgba(0, 0, 0, 0.15);
	height: 88px;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	@media screen and (min-width: 1024px) {
		width: 520px;
		height: 60px;
		flex-direction: row;
	}
`;

const StyledSpanBold = styled.span`
	color: #fff;
	font-size: 15px;
	font-weight: 700;
	line-height: 26px;
	letter-spacing: 0.268px;
`;

const StyledSpanLighter = styled.span`
	color: #fff;
	font-size: 15px;
	line-height: 26px;
	letter-spacing: 0.268px;
`;
export {
	StyledTitle,
	StyledText,
	StyledButtonFree,
	StyledSpanBold,
	StyledSpanLighter,
	StyledTextContainer,
	SyledContentContainer
};
