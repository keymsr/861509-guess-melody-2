import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

it(`app correctly renders after relaunch`, () => {
  const tree = renderer
     .create(<App
       errorsCount={0}
       minutes={0}
     />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
