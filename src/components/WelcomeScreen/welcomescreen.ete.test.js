import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcomeScreen";

configure({adapter: new Adapter()});

it(`bunton click calls once`, () => {
  const clickHandler = jest.fn();
  const wrapper = shallow(
      <WelcomeScreen
        errorsCount={0}
        minutes={0}
        onStartButtonClick={clickHandler} />
  );

  wrapper.find(`.welcome__button`).simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
