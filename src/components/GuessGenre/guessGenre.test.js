import React from 'react';
import renderer from "react-test-renderer";
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

it(`GuessGenre correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<GuessGenre
    question={questionMock}
    screenIndex={0}
    onUserAnswer={jest.fn()}
  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
