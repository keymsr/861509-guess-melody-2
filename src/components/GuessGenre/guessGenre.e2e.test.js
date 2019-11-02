import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GuessGenre from './guessGenre.jsx';

const questionMock = {
  "questionType": `genre`,
  "genre": `electronic`,
  "answers": [
    {
      "src": `https:\\www`,
      "genre": `rock`
    },
    {
      "src": `https:\\www`,
      "genre": `pop`
    },
    {
      "src": `https:\\www`,
      "genre": `electronic`
    },
  ]
};

Enzyme.configure({adapter: new Adapter()});

it(`GuessGenre callback with params`, () => {
  const onAnswer = jest.fn();
  const screen = shallow(
      <GuessGenre
        question={questionMock}
        screenIndex={0}
        onAnswer={onAnswer}
      />);
  const answerButton = screen.find(`.game__tracks`);
  answerButton.simulate(`submit`, {
    preventDefault: () => {
    },
    target: {
      value: `answer-0`
    }
  });
  expect(onAnswer).toHaveBeenCalledWith(`answer-0`);

});
