import React from "react";

class Instructions extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="popup-container">
				<div className="startPopup">
					<div className="instructions">
						<ul>
							<h2>Instructions:</h2>
							<li>
								<p>
									Each question has <strong>20 seconds</strong> timer.
								</p>
							</li>
							<li>
								<p>
									If question is <span>NOT answered</span> in 20 seconds, no
									points will be awarded or deducted.
								</p>
							</li>
							<li>
								<p>
									If question is <span>answered incorrectly</span>,
									<strong> 1 point</strong> will be
									<strong> deducted</strong> from score.
								</p>
							</li>
							<li>
								<p>
									<span>Correct answer</span> will be awarded with
									<strong> 3 points</strong>.
								</p>
							</li>
							<li>
								<p>
									At the End of Quiz, Score will be displayed and a option to
									<strong> restart</strong> the quiz will be given.
								</p>
							</li>
							<li>
								<p>Max Score: 30, Min Score: -10</p>
							</li>
							<li>
								<p>
									Tip: Read the <strong>Series Name</strong> before answering
									the question.
								</p>
							</li>
						</ul>
					</div>
					<button onClick={this.props.start} className="start-button">
						START
					</button>
				</div>
			</div>
		);
	}
}

export default Instructions;
