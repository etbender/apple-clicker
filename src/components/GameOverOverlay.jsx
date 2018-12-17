import React from 'react';

class GameOverOverlay extends React.Component {
  
  render(){
    return (
      <>
        <rect height="100%" width="100%" stroke="black" strokeWidth="4" fill="black" id="resetGameOverlay" opacity="0.85"/>
        <rect height="15%" width="100%" fill="black" y="210" />
        <text x="275" y="300" fill="darkred" id="youDiedText">YOU DIED</text>
        <text fontSize="32" x="240" y="425" fill="orange">{"Your score is "+this.props.score}</text>
        <text fontSize="32" x="200" y="500" onClick={this.props.onClick} fill="orange">Press here to restart.</text>
      </>
    )
  }
  
}

export default GameOverOverlay;