import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/app";
import GameParams from "./mocks/gameParams";
import Questions from "./mocks/questions";

const init = () => {
  ReactDOM.render(
      <App
        minutes = {GameParams.minutes}
        errorsCount = {GameParams.errorsCount}       
        questions = {Questions} 
      />,
      document.querySelector(`#root`)
  );
};

init();
