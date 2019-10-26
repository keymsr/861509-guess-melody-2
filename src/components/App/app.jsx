import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../WelcomeScreen/welcomeScreen.jsx";
import GuessPerformer from "../GuessPerformer/guessPerformer.jsx";

class App extends React.PureComponent {
  static showGameScreen(questionIndex, props, userAnserwCallback) {

    if (questionIndex === -1) {
      const minutes = props.minutes;
      const errorsCount = props.errorsCount;

      return <WelcomeScreen
        minutes={minutes}
        errorsCount={errorsCount}
        onStartButtonClick={userAnserwCallback}
      />;
    }

    const {questions} = props;
    const currentQuestion = questions[questionIndex];

    switch (currentQuestion.questionType) {
      case `performer`: return <GuessPerformer
        question={currentQuestion}
        onUserAnswer={userAnserwCallback}
      />;

      case `genre`: return <GuessPerformer
        question={currentQuestion}
        onUserAnswer={userAnserwCallback}
      />;
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      questionIndex: -1,
    };
  }

  render() {
    const {questions} = this.props;
    const {questionIndex} = this.state;

    return App.showGameScreen(questionIndex, this.props, () => {
      this.setState((prevState) => {
        const nextIndex = prevState.questionIndex + 1;
        const isEnd = nextIndex >= questions.length;
        return {questionIndex: !isEnd ? nextIndex : -1};
      });
    });
  }
}

App.propTypes = {
  minutes: PropTypes.number.isRequired,
  errorsCount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(PropTypes.shape({
    questionType: PropTypes.string,
    questionData: PropTypes.object})
  )};


export default App;
