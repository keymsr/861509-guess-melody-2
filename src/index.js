import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.js";

const init = () => {
  ReactDOM.render(
      <App
        errorsCount = {3}
        minutes = {7}
      />,
      document.querySelector(`#root`)
  );
};

init();
