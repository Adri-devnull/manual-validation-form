import {
	StyledButtonFree,
	StyledSpanBold,
	StyledSpanLighter,
	StyledText,
	StyledTextContainer,
	StyledTitle,
	SyledContentContainer
} from './styles';

const Texts = () => {
	return (
		<SyledContentContainer>
			<StyledTextContainer>
				<StyledTitle>Learn to code by watching others</StyledTitle>
				<StyledText>
					See how experienced developers solve problems in real-time. Watching
					scripted tutorials is great, but understanding how developers think is
					invaluable.
				</StyledText>
			</StyledTextContainer>
			<StyledButtonFree>
				<StyledSpanBold>Try it free 7 days</StyledSpanBold>
				<StyledSpanLighter>then $20/mo. thereafter</StyledSpanLighter>
			</StyledButtonFree>
		</SyledContentContainer>
	);
};

export default Texts;
