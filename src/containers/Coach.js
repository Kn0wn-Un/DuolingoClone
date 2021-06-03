import Footer from './Footer';
function Coach() {
	return (
		<div className="content">
			<section className="learn-section">
				<div className="goal-changes">
					<div>Daily Goal settings</div>
					<span className="button">SAVE CHANGES</span>
				</div>
				<p>
					Coach here! Selecting a daily goal will help you stay
					motivated while learning a language. You can change your
					goal at any time.
				</p>
				<div className="goals">
					<div className="img-running"></div>
					<div className="goals-table">
						<div className="goal first">
							<span className="goal-name">Basic</span>
							<span className="xp">1 XP per day</span>
						</div>
						<div className="goal">
							<span className="goal-name">Casual</span>
							<span className="xp">10 XP per day</span>
						</div>
						<div className="goal">
							<span className="goal-name">Regular</span>
							<span className="xp">20 XP per day</span>
						</div>

						<div className="goal">
							<span className="goal-name">Serious</span>
							<span className="xp">30 XP per day</span>
						</div>

						<div className="goal last">
							<span className="goal-name">Intense</span>
							<span className="xp">50 XP per day</span>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default Coach;
