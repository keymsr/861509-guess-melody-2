import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcomeScreen";

it(`welcomeScreen correctly renders`, () => {
  const tree = renderer
     .create(<WelcomeScreen
       errorsCount={0}
       minutes={0}
       onClick={jest.fn()}
     />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
