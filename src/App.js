import './styles/App.css';
import './styles/styles.css';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import Footer from './containers/Footer';
import Profile from './containers/Profile';
import Learn from './containers/Learn';
function App() {
	return (
		<div>
			<BrowserRouter>
				<section className="header">
					<nav className="main-links">
						<span>
							<Link to="/learn">LEARN</Link>
						</span>
						<span>
							<Link to="/learn">STORIES</Link>
						</span>
						<span>
							<Link to="/learn">SHOP</Link>
						</span>
						<span>
							<Link to="/learn">MORE</Link>
						</span>
					</nav>
					<div className="personal-header"></div>
				</section>
				<section className="main-content">
					<Switch>
						<Route exact path="/">
							<Learn />
							<Profile />
						</Route>
						<Route exact path="/learn">
							<Learn />
							<Profile />
						</Route>
						<Route exact path="/account">
							<div>
								<div>Account</div>
								<Footer />
							</div>
							<Profile />
						</Route>
						<Route exact path="/coach">
							<div>Coach</div>
						</Route>
					</Switch>
				</section>
			</BrowserRouter>
		</div>
	);
}

export default App;
