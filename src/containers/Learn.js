import Footer from './Footer';
function Learn() {
	return (
		<section className="learn-container">
			<div className="path">
				<div className="path-choose">Choose your path!</div>
				<div className="explain">
					<div>Beginners start at Letters 1.</div>
					<div>Advanced learners take a short test.</div>
				</div>
				<div className="path-select">
					<span>
						<div className="material-icons-outlined path-icon basics">
							school
						</div>
						<div>Basics 1</div>
					</span>
					<span className="or">OR</span>
					<span>
						<div className="material-icons-outlined path-icon placement">
							account_balance
						</div>
						<div>Placement test</div>
					</span>
				</div>
			</div>
			<div className="other-paths">
				<div className="material-icons-outlined path-icon">
					emoji_events
				</div>
				<div>Basics 2</div>
				<div className="material-icons-outlined path-icon">
					emoji_events
				</div>
				<div>Basics 3</div>
			</div>
			<Footer />
		</section>
	);
}

export default Learn;
