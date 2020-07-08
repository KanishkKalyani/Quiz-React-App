import React from "react";
import "./QuizBody.css";
import Data from "./Data.js";
import QuestionCard from "./QuestionCard.js";
import Timer from "./Timer.js";

class QuizBody extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Data: Data(),
			score: 0,
			currentQuestionId: 0,
			resetTimer: true,
		};
	}

	selectedAnswer = (event, id) => {
		let score = this.state.score;
		const { answer } = this.state.Data[id];
		if (event.target.textContent === answer) {
			score += 3;
			this.setState({ score: score });
		} else {
			score -= 1;
			this.setState({ score: score });
		}
		this.updateQuestion();
	};

	updateQuestion = () => {
		let id = this.state.currentQuestionId;
		id += 1;
		this.setState({
			currentQuestionId: id,
		});
	};

	reset = () => {
		this.setState({
			score: 0,
			currentQuestionId: 0,
		});
	};

	render() {
		if (this.state.currentQuestionId <= this.state.Data.length - 1) {
			return (
				<>
					<div className="scoreTimerWrapper">
						<span className="score">SCORE: {this.state.score}</span>
						<Timer
							resetTimer={this.state.resetTimer}
							updateQuestion={this.updateQuestion}></Timer>
					</div>
					<div className="quiz-body">
						<QuestionCard
							content={this.state.Data[this.state.currentQuestionId]}
							selectedAnswer={this.selectedAnswer}></QuestionCard>
					</div>
				</>
			);
		} else {
			return (
				<div className="endPopup">
					<p className="popup-score">Score: {this.state.score}</p>
					<button onClick={this.reset} className="reset-button">
						RESET
					</button>
				</div>
			);
		}
	}
}

export default QuizBody;

// import React from "react";
// import "./QuizBody.css";
// import Data from "./Data.js";
// import QuestionCard from "./QuestionCard.js";

// class QuizBody extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			Data: Data(),
// 			score: 0,
// 			currentQuestionId: 0,
// 		};
// 	}

// 	selectedAnswer = (event, id) => {
// 		let score = this.state.score;
// 		const { answer } = this.state.Data[id];
// 		if (event.target.textContent === answer) {
// 			score += 3;
// 			this.setState({ score: score });
// 		} else {
// 			score -= 1;
// 			this.setState({ score: score });
// 		}
// 		this.updateQuestion();
// 	};

// 	updateQuestion = () => {
// 		let id = this.state.currentQuestionId;
// 		id += 1;
// 		this.setState({
// 			currentQuestionId: id,
// 		});
// 		// this.clockStart();
// 	};

// 	reset = () => {
// 		this.setState({
// 			score: 0,
// 			currentQuestionId: 0,
// 		});
// 	};

// 	// clockStart = () => {
// 	// 	let seconds = 1;
// 	// 	let timerId = setInterval(() => {
// 	// 		console.log(seconds++);
// 	// 		return <span>{seconds}</span>;
// 	// 	}, 1000);
// 	// 	setTimeout(() => {
// 	// 		clearInterval(timerId);
// 	// 		this.updateQuestion();
// 	// 	}, 5000);
// 	// };

// 	render() {
// 		if (this.state.currentQuestionId <= this.state.Data.length - 1) {
// 			return (
// 				<>
// 					<div className="score">SCORE: {this.state.score}</div>
// 					<div className="quiz-body">
// 						<QuestionCard
// 							content={this.state.Data[this.state.currentQuestionId]}
// 							selectedAnswer={this.selectedAnswer}></QuestionCard>
// 					</div>
// 				</>
// 			);
// 		} else {
// 			return (
// 				<div className="endPopup">
// 					<p className="popup-score">Score: {this.state.score}</p>
// 					<button onClick={this.reset} className="reset-button">
// 						RESET
// 					</button>
// 				</div>
// 			);
// 		}
// 	}
// }

// export default QuizBody;

// // import React from "react";
// // import "./QuizBody.css";
// // import Data from "./Data.js";
// // import QuestionCard from "./QuestionCard.js";

// // class QuizBody extends React.Component {
// // 	constructor(props) {
// // 		super(props);
// // 		this.state = {
// // 			Data: Data(),
// // 			score: 0,
// // 		};
// // 	}

// // 	selectedAnswer = (event, id) => {
// // 		console.log(event.target.textContent, id);
// // 		let score = this.state.score;
// // 		const { answer } = this.state.Data[id];
// // 		if (event.target.textContent === answer) {
// // 			score += 3;
// // 			this.setState({ score: score });
// // 		} else {
// // 			score -= 1;
// // 			this.setState({ score: score });
// // 		}
// // 	};

// // 	render() {
// // 		return (
// // 			<div className="quiz-body">
// // 				<div>
// // 					<div>SCORE: {this.state.score}</div>
// // 					<div>TIMER</div>
// // 				</div>
// // 				{this.state.Data.map((cont, index) => {
// // 					return (
// // 						<QuestionCard
// // 							content={cont}
// // 							selectedAnswer={this.selectedAnswer}></QuestionCard>
// // 					);
// // 				})}
// // 			</div>
// // 		);
// // 	}
// // }

// // export default QuizBody;
