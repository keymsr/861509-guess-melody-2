import React from "react";
import {number} from 'prop-types';
import WelcomeScreen from '../WelcomeScreen/welcomeScreen';

class App extends React.PureComponent {
  static showGameScreen(question, props, userAnserwCallback) {
    if (question === -1) {
      const {
        minutes,
        errorsCount
      } = props;

      return <WelcomeScreen
        minutes={minutes}
        errorsCount={errorsCount}
        onStartButtonClick={userAnserwCallback}
      />;
    }
  }
}

App.propTypes = {minutes: number, errorsCount: number};


export default App;
