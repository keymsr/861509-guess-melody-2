import React from "react";
import PropTypes from "prop-types";

const GuessPerformer = (props) => {
  const question = props.question;
  const answers = question.answers;

  return (
    <section className="game game--artist">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
        </a>

        <div className="timer__value" xmlnsXlink="http://www.w3.org/1999/xhtml">
          <span className="timer__mins">05</span>
          <span className="timer__dots">:</span>
          <span className="timer__secs">00</span>
        </div>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <button className="track__button track__button--play" type="button"></button>
            <div className="track__status">
              <audio></audio>
            </div>
          </div>
        </div>

        <form className="game__artist">
          {answers.map((item, i) => {
            return (
              <div key={`answer-${i}`} className="artist">
                <input className="artist__input visually-hidden" type="radio" name="answer" value={`answer-${i}`} id={`answer-${i}`} />
                <label className="artist__name" htmlFor={`answer-${i}`}>
                  <img className="artist__picture" src={item.titleImage} alt={item.performer} />
                  {item.performer}
                </label>
              </div>
            );
          })}
        </form>
      </section>
    </section>
  );
};

GuessPerformer.propTypes = {
  question: PropTypes.object,
  callback: PropTypes.func};

export default GuessPerformer;
