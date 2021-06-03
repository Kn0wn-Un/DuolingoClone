import './styles/App.css';
import './styles/styles.css';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import Profile from './containers/Profile';
import Learn from './containers/Learn';
import Coach from './containers/Coach';
import Account from './containers/Account';
import CreateProfile from './containers/CreateProfile';
function App() {
	return (
		<div>
			<BrowserRouter>
				<header className="header">
					<nav className="main-links">
						<span>
							<Link to="/learn">
								<span className="material-icons-outlined nav-icons">
									local_library
								</span>
								<span className="nav-text">LEARN</span>
							</Link>
						</span>
						<span>
							<Link to="/coach">
								<span className="material-icons-outlined nav-icons">
									sports
								</span>
								<span className="nav-text">COACH</span>
							</Link>
						</span>
						<span>
							<Link to="/account">
								<span className="material-icons-outlined nav-icons">
									face
								</span>
								<span className="nav-text">ACCOUNT</span>
							</Link>
						</span>
						<span>
							<Link to="#">
								<span className="material-icons-outlined nav-icons">
									expand_more
								</span>
								<span className="nav-text">MORE</span>
							</Link>
						</span>
					</nav>
					<div className="personal-header">
						<span className="nav-icons country"> 🇮🇳</span>
						<span className="material-icons-outlined nav-icons star">
							star
						</span>
						<span className="material-icons-outlined nav-icons streak">
							whatshot
						</span>
						<span className="material-icons-outlined nav-icons collections">
							category
						</span>
						<span
							className="nav-icons user-img"
							style={{ padding: '15px', fontSize: '21px' }}
						>
							H
						</span>
					</div>
				</header>
				<section className="main-content">
					<Switch>
						<Route exact path="/">
							<Learn />
							<CreateProfile />
						</Route>
						<Route exact path="/learn">
							<Learn />
							<CreateProfile />
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
