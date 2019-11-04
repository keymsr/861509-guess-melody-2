import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GuessPerformer from './guessPerformer.jsx';

const questionMock = {
  "questionType": `performer`,
  "track": {
    "src": `https:\\www`,
    "performer": `Jean Michel Jarre`
  },
  "answers": [
    {
      "src": `https:\\www`,
      "picture": `http://placehold.it/134x134`,
      "performer": `The Alan Parsons Project`
    },
    {
      "src": `https:\\www`,
      "picture": `http://placehold.it/134x134`,
      "performer": `Michael Jackson`
    },
    {
      "src": `https:\\www`,
      "picture": `http://placehold.it/134x134`,
      "performer": `ABBA`
    },
  ]
};

Enzyme.configure({adapter: new Adapter()});

it(`GuessPerformer callback with params`, () => {
  const onUserAnswer = jest.fn();
  const screenIndex = 0;
  const screen = shallow(
      <GuessPerformer
        question={questionMock}
        screenIndex={screenIndex}
        onUserAnswer={onUserAnswer}
      />);
  const answerForm = screen.find(`.game__artist`);
  answerForm.simulate(`change`, {
    preventDefault: () => {
    },
    target: {
      value: `Jean Michel Jarre`,
    },
  });
  expect(onUserAnswer).toHaveBeenCalledTimes(1);
  expect(onUserAnswer).toHaveBeenCalledWith(`Jean Michel Jarre`);
});
