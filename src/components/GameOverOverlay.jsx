import React from 'react';

class GameOverOverlay extends React.Component {
  
  render(){
    return (
      <>
        <rect height="100%" width="100%" stroke="black" strokeWidth="4" fill="black" id="resetGameOverlay" opacity="0.85"/>
        {
          this.props.misclicked &&
          <>
            <rect height="15%" width="100%" fill="black" y="210" />
            <text x="275" y="300" fill="darkred" id="youDiedText">YOU DIED</text>
          </>
        }
        {
          !this.props.misclicked &&
          <text x="270" y="300" fill="orange" fontSize="36">Time's up!</text>
        }
        <text fontSize="32" x="245" y="425" fill="orange">{"Your score is "+this.props.score}</text>
        <text fontSize="32" x="205" y="500" onClick={this.props.onClick} fill="orange">Press here to restart.</text>
      </>
    )
  }
  
}

export default GameOverOverlay;