import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/app.jsx";
import gameParams from "./mocks/gameParams";
import questions from "./mocks/questions";

const init = () => {
  ReactDOM.render(
      <App
        minutes = {gameParams.minutes}
        errorsCount = {gameParams.errorsCount}
        questions = {questions}
      />,
      document.querySelector(`#root`)
  );
};

init();
