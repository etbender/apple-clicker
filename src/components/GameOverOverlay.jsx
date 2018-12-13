import React from 'react';

class GameOverOverlay extends React.Component {
  
  onClick = () => {
    this.props.onClick();
  };
  
  render(){
    const {onClick } = this.props;
    return (
      <>
        <rect height="100%" stroke="black" strokeWidth="4" fill="purple" id="resetGameOverlay" opacity="0.75" onClick={this.onClick}/>
        <text fontSize="32" x="150" y="500" onClick={this.onClick}>Press anywhere to restart!</text>
      </>
    )
  }
  
}

export default GameOverOverlay;