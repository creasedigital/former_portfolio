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
							<Route
								exact
								path='/'
								element={<Header />}
								className='container'
							/>
						</Route>
						<Route>
							<Route
								exact
								path='/about'
								element={<About />}
								className='container'
							/>
						</Route>
						<Route>
							<Route
								exact
								path='/portfolio'
								element={<Portfolio />}
								className='container'
							/>
						</Route>
						<Route>
							<Route
								exact
								path='/hireme'
								element={<HireMe />}
								className='container'
							/>
						</Route>
					</Routes>
					<PortfolioModal />
					<Footer className='container' />
				</ProjectContextProvider>
			</Router>
		</div>
	);
}

export default App;
