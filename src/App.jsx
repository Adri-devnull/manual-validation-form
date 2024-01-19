import Form from './components/form/Form';
import { StyledMain } from './components/main/styles';
import Texts from './components/texts/Texts';

const App = () => {
	return (
		<StyledMain>
			<Texts />
			<Form />
		</StyledMain>
	);
};

export default App;
