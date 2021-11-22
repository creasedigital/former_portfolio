import ProjectContextProvider from './components/contexts/ProjectContext';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import HireMe from './components/HireMe';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PortfolioModal from './components/PortfolioModal';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className='app'>
			<Router>
				<ProjectContextProvider>
					<Navigation className='container' />
					<Routes>
						<Route>
							<Header path='/' exact />
						</Route>
						<Route>
							<About path='/about' exact className='container' />
						</Route>
						<Route>
							<Portfolio path='/portfolio' exact className='container' />
						</Route>
						<PortfolioModal />
						<Route>
							<HireMe path='/hireme' exact className='container' />
						</Route>
					</Routes>
					<Footer className='container' />
				</ProjectContextProvider>
			</Router>
		</div>
	);
}

export default App;
