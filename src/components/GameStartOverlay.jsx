import React from 'react';
import backgroundImg from '../assets/sky-background.jpg'

class GameStartOverlay extends React.Component {
  
  onClick = () => {
    this.props.onClick();
  };
  //<rect height="100%" stroke="black" strokeWidth="4" fill="purple" id="startGameOverlay" opacity="1" onClick={this.onClick}/>
  
  render(){
    const {onClick } = this.props;
    return (
      <>
        <image height="100%" xlinkHref={backgroundImg} id="startGameOverlay" onClick={this.onClick}/>
        <text fontSize="32" x="150" y="500" id="gameStartText" onClick={this.onClick}>Press anywhere to begin!</text>
      </>
    )
  }
  
}

export default GameStartOverlay;