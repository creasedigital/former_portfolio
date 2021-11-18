import ProjectContextProvider from './components/contexts/ProjectContext';
import StackContextProvider from './components/contexts/StackContext';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import HireMe from './components/HireMe';
import Footer from './components/Footer';

function App() {
	return (
		<div>
			<ProjectContextProvider>
				<StackContextProvider>
					<Header className='container' />
					<About className='container' />
					<Portfolio className='container' />
					<HireMe className='container' />
					<Footer className='container' />
				</StackContextProvider>
			</ProjectContextProvider>
		</div>
	);
}

export default App;
