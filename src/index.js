import React from "react";
import ReactDOM from "react-dom";
import WelcomeScreen from "./components/welcomeScreen.js";

const init = () => {
  ReactDOM.render(
      <WelcomeScreen />,
      document.querySelector(`#root`)
  );
};

init();
