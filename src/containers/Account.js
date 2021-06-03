import Footer from './Footer';
import Switch from 'react-switch';
function Account() {
	return (
		<div className="content">
			<section className="learn-section">
				<div className="goal-changes">
					<div>Account settings</div>
					<span className="button">SAVE CHANGES</span>
				</div>
				<div className="settings">
					<div className="inputs">
						<div className="user-inputs">
							<span>Username</span>
							<input type="text"></input>
						</div>
						<div className="user-inputs">
							<span>Email</span>
							<input type="text"></input>
						</div>
						<div className="user-inputs">
							<span>Sound effects</span>
							<Switch onChange={() => {}} checked={true} />
						</div>
						<div className="user-inputs">
							<span>Animations</span>
							<Switch onChange={() => {}} checked={true} />
						</div>
						<div className="user-inputs">
							<span>Motivational messages</span>
							<Switch onChange={() => {}} checked={true} />
						</div>
						<div className="user-inputs">
							<span>Speaking exercises</span>
							<Switch onChange={() => {}} checked={true} />
						</div>
						<div className="user-inputs">
							<span>Listening exercises</span>
							<Switch onChange={() => {}} checked={true} />
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default Account;
