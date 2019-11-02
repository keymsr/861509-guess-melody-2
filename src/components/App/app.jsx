import React from "react";
import {PureComponent} from "react";
import PropTypes from "prop-types";
import WelcomeScreen from "../WelcomeScreen/welcomeScreen.jsx";
import GuessPerformer from "../GuessPerformer/guessPerformer.jsx";
import GuessGenre from "../GuessGenre/guessGenre.jsx";


class App extends PureComponent {
  static getGameScreen(questionIndex, props, onUserAnswerClick) {

    if (questionIndex === -1) {
      const minutes = props.minutes;
      const errorsCount = props.errorsCount;

      return <WelcomeScreen
        minutes={minutes}
        errorsCount={errorsCount}
        onStartButtonClick={onUserAnswerClick}
      />;
    }

    const {questions} = props;
    const currentQuestion = questions[questionIndex];

    switch (currentQuestion.questionType) {
      case `performer`: return <GuessPerformer
        question={currentQuestion}
        screenIndex={questionIndex}
        onUserAnswer={onUserAnswerClick}
      />;

      case `genre`: return <GuessGenre
        question={currentQuestion}
        screenIndex={questionIndex}
        onAnswer={onUserAnswerClick}
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

    return App.getGameScreen(questionIndex, this.props, () => {
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
