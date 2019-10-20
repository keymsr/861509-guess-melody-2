import React from "react";
import {number} from 'prop-types';
import WelcomeScreen from '../WelcomeScreen/welcomeScreen';

const App = (props) => {
  const {minutes, errorsCount} = props;

  return <WelcomeScreen
    minutes={minutes}
    errorsCount={errorsCount}
  />;
};

App.propTypes = {minutes: number, errorsCount: number};

export default App;
