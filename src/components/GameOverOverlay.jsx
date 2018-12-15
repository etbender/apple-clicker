import React from 'react';

class GameOverOverlay extends React.Component {
  
  render(){
    return (
      <>
        <rect height="100%" stroke="black" strokeWidth="4" fill="black" id="resetGameOverlay" opacity="0.85"/>
        <rect height="15%" fill="black" y="210" />
        <text x="225" y="300" fill="darkred" id="youDiedText">YOU DIED</text>
        <text fontSize="32" x="150" y="500" onClick={this.props.onClick} fill="orange">Press here to restart.</text>
      </>
    )
  }
  
}

export default GameOverOverlay;