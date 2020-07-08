import React from "react";
import "./App.css";
import QuizHeader from "./QuizHeader.js";
import QuizBody from "./QuizBody.js";
import Instructions from "./Instructions.js";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			start: false,
		};
	}

	start = () => {
		this.setState({ start: true });
	};

	render() {
		if (!this.state.start) {
			return <Instructions start={this.start}></Instructions>;
		} else {
			return (
				<div className="App">
					<QuizHeader></QuizHeader>
					<QuizBody></QuizBody>
				</div>
			);
		}
	}
}

export default App;
