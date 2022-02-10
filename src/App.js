import Homepage from './layout/Homepage';
import Header from './layout/Header';
import Footer from './layout/Footer';
import styled from 'styled-components';

const Wrapper = styled.div`
	.main {
		display: flex;
		margin: auto;
		justify-content: center;
	}
`;

function App() {
	return (
		<Wrapper>
		
		<div className="App">
			<header>
				<Header />
			</header>
			<div className='main'>
				<Homepage />	
			</div>
			<footer>
				<Footer />
			</footer>
		</div>
		</Wrapper>
	);
}

export default App;