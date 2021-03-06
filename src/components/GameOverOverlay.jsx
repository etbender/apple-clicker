import React from 'react';

function GameOverOverlay(props) {
  const {score, misclicked, onClick} = props;
  return (
    <>
        <rect height="100%" width="100%" stroke="black" strokeWidth="4" fill="black" opacity="0.85"/>
        {
          misclicked &&
          <>
            <rect height="15%" width="100%" fill="black" y="210" />
            <text x="275" y="300" fill="darkred" id="youDiedText">YOU DIED</text>
          </>
        }
        {
          !misclicked &&
          <text x="270" y="300" fill="orange" fontSize="36">Time's up!</text>
        }
        <text fontSize="32" x="245" y="425" fill="orange">{"Your score is "+score}</text>
        <text fontSize="32" x="205" y="500" onClick={onClick} fill="orange">Press here to restart.</text>
      </>
  );
}

export default GameOverOverlay;