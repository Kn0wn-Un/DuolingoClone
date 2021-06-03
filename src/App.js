import './styles/App.css';
import './styles/styles.css';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import Profile from './containers/Profile';
import Learn from './containers/Learn';
import Coach from './containers/Coach';
import Account from './containers/Account';
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
							<Link to="/coach">COACH</Link>
						</span>
						<span>
							<Link to="/account">ACCOUNT</Link>
						</span>
						<span>
							<Link to="#">MORE</Link>
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
							<Account />
							<Profile />
						</Route>
						<Route exact path="/coach">
							<Coach />
							<Profile />
						</Route>
					</Switch>
				</section>
			</BrowserRouter>
		</div>
	);
}

export default App;
